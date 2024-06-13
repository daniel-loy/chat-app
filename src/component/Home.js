import React, { useState, useRef, useEffect } from 'react';
import user from "./send.png";
import send from "./user.png";
import send2 from "./user2.png";
import chichat from "./chitchat.png";
import { io } from 'socket.io-client';
import styles from "./Home.module.css";
import { useLocation } from "react-router-dom";
import song from "./phone.mp4";

const socket = io('https://chat-server-ealq.onrender.com');

function Home() {
  const [audio] = useState(new Audio(song));
  const location = useLocation();
  const { username } = location.state || {};
  const [Message, setMessage] = useState("");
  const messageContainerRef = useRef(null);
  
  const handleClick = (event) => {
    event.preventDefault();
    append(`You: ${Message}`, 'right');
    socket.emit('send', Message);
    setMessage(""); 
  }

  const append = (message, position) => {
    const firstdiv = document.createElement('div');
    firstdiv.classList.add(styles.message);
    firstdiv.classList.add(position === 'right' ? styles.right : styles.left);
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add(position === 'right' ? styles.submessage : styles.submessageleft);
    const imageElement = document.createElement('img');
    imageElement.classList.add(styles.diagram);
    if (position === "right") {
      firstdiv.append(messageElement);
      imageElement.src = send;
      firstdiv.append(imageElement);
    } else {
      imageElement.src = send2;
      firstdiv.append(imageElement);
      firstdiv.append(messageElement);
    }
    messageContainerRef.current.appendChild(firstdiv);
    if (position === 'left') {
        audio.play();
      } else {
        audio.pause();
      }
    }
  

  const server = () => {
    socket.emit('user-joined', username);
    append(`You joined the chat`, 'right');
    socket.on('user-joined', name => {
      append(`${name} joined the chat`, 'left');
    });

    socket.on('receive', data => {
      append(`${data.name}: ${data.message}`, 'left');
    });

    socket.on('user-left', username => {
      append(`${username}: Left the chat`, 'left');
    });

    return () => {
      socket.off('user-joined');
      socket.off('receive');
      socket.off('user-left');
    };
  }
  
  useEffect(() => {
    server();
  }, []);
  
  return (
    <div className={styles.bodyy}>
      <div style={{ display: "flex", justifyContent: "center", padding: "30px" }}>
        <img src={chichat} style={{ width: "50px" }} alt="..." />
        <div style={{ alignSelf: "center", padding: "5px" }}>
          <h5 style={{ fontFamily: "Lucida Handwriting" }}>Chit Chat</h5>
        </div>
      </div>
      <div className={styles.container} ref={messageContainerRef}>
 
      </div>
      <form action="#" id={styles.sendcontainer} onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Type a message"
          name="messageInp"
          id={styles.messageInp}
          style={{ fontFamily: "Times New Roman" }}
          value={Message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className={styles.btn} type="submit">
          <img src={user} className="img-fluid" alt="..." />
        </button>
      </form>
    </div>
  );
}

export default Home;
