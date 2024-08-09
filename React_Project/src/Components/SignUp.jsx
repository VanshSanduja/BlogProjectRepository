import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios';
// import SignUpGIF from "../Images/Signup GIF.mp4";
// import Images from "../Images/Img 1.jpg";
// import {BrowserRouter, Routes, Route} from "react-router-dom";

function SignUp() {

  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState();

  const ChangeSignUpData=(data) => {
    data.preventDefault()
    setSignUpData({ ...signUpData, [data.target.name]: data.target.value})
    console.log(signUpData);
  }

  const SignUpDataBase = async (data) => {
    data.preventDefault()
    try {
      
      const url = 'http://localhost:5000/createdData';

      const user = await axios.post(url, signUpData)
      if(user.status === false) window.alert("Inavlid data")
        else {navigate('/login')}
    } catch (error) {
      window.alert(error.response.data.msg);
    }
  }

  return (
    <div className="signUp flex w-full min-h-screen bg-cover bg-center justify-center items-center p-4 py-[110px]">
      <div className="bg-gray-100 flex rounded-2xl shadow-2xl p-5">
        <div className="px-8">
          <h1 className="text-2xl">Sign Up</h1>
          <p className="mt-4">
            If you are already a member, Please
            <Link className="text-blue-500" to="/login">
              {" "}
              Log In
            </Link>
          </p>

          <form className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              onChange={ChangeSignUpData}
              type="text"
              name="Name"
              placeholder="Enter Your name"
            />
            <input
              className="p-2 rounded-xl border"
              onChange={ChangeSignUpData}
              type="email"
              name="Email"
              placeholder="Enter Your Email"
            />
            <input
              className="p-2 rounded-xl border"
              onChange={ChangeSignUpData}
              type="password"
              name="Password"
              placeholder="Enter Your Password"
            />

            <button onClick={SignUpDataBase} className="bg-[#1e376e] rounded-xl text-white py-2 hover:">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
