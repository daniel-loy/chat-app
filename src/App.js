import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from "./component/Welcome";
import Home from "./component/Home"

function App({}) {
  
  return (
   <div>
          <Router>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
   </div>
  );
}

export default App;