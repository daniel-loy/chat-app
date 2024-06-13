import React, { useState } from 'react';
import chichat from "./chitchat.png";
import styled from "styled-components";
import manchatting from "./chatting.png";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  @media (max-width: 490px) {
  margin-top:0px;
    width:290px;
    margin-left:15%;
  }
     margin-top:80px;

   
`;
const Divstyled = styled.div`
  @media (max-width: 490px) {
  margin-top:0px;
  }
     margin-top:80px;
     background-color: #85FFBD; background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);   
`;
const Textcolor=styled.div`
  margin-top:20px;
  font-size: 150%;
 background: -webkit-linear-gradient(rgb(188, 12, 241), rgb(212, 4, 4));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

console.log("this is loy")

function Welcome() {
  console.log("heelo")
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/Home", { state: { username: username } });
  };

  return (
    <Divstyled className="App"style={{}}>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="row" style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={chichat}
              style={{ width: "20%" }}
              alt="..."
            />
          </div>
          <div className="row">
            <h3 className="modal-title" style={{ fontFamily: "Lucida Handwriting" }}>Chit Chat</h3>
          </div>
          <div className="row" style={{ marginTop: "5vh", fontFamily: "Times New Roman', Times, serif" }}>
      
            <h5 className="modal-title" >Start chatting with buddies,</h5>
            <h5 className="modal-title">anytime, anywhere with ChitChat</h5>
     
           
            <Textcolor className="modal-title" style={{ color: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)" }}>Ask Your buddy to join this chat</Textcolor>
          </div>
          <div className="row" style={{ marginTop: "5vh" }}>
            <form>
              <div className="mb-3" style={{ paddingLeft: "10vh", paddingRight: "10vh" }}>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Enter Your Name Buddy
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  style={{ border: "1px solid black" }}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit" className="btn btn-primary" onClick={handleClick} style={{ marginTop: "3vh" }}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <StyledDiv className="col-sm-3 mb-3 mb-sm-0">
          <img
            src={manchatting}
            // style={{ }}
            className="img-fluid"
            alt="..."
          />
        </StyledDiv>
      </div>
    </Divstyled>
  );
}

export default Welcome;
