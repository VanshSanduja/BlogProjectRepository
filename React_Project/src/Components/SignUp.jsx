import React from 'react'
import Images from "../Images/Img 1.jpg";
// import {BrowserRouter, Routes, Route} from "react-router-dom";

function SignUp() {
  const inputStyle = {
    border: "2px solid black",
    borderRadius: "5px",
  };

  const containerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid lightblue",
    borderRadius: "10px",
    width: "350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const buttonStyle = {
    border: "2px solid black",
    borderRadius: "15px",
    backgroundColor: "lightblue",
    width: "100px",
  };
  
  return (
  <>
      <div style={{ fontFamily: '"Be Vietnam Pro", sans-serif' }}>
        <div className="h-screen w-full">
          <img
            src={Images}
            className="h-full w-full object-cover"
            alt="background"
          ></img>
        </div>
        <div className="App" style={containerStyle}>
          <h1 style={{ color: "#fff" }}>SignUp Form</h1>
          <label>
            <br />
            <h1 style={{ color: "#fff" }}>Email</h1>
          </label>
          <input type="email" style={inputStyle} />
          <label>
            <br />
            <h1 style={{ color: "#fff" }}>Password</h1>
          </label>
          <input type="password" style={inputStyle} />
          <br />
          <button style={buttonStyle}>Sign Up</button>
          <br />
        </div>
      </div>
    </>
  );
}

export default SignUp