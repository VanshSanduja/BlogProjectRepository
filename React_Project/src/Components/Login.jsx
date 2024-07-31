import React, {useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import DataContext from './DataProvider';
// import Images from "../Images/Img 1.jpg";
// import {BrowserRouter, Routes, Route} from "react-router-dom";

function LogIn(isUserAuthentication) {

  const navigate = useNavigate();
  const [logInData, setLogInData] = useState();

  const changeLogInData = (data) => {

    data.preventDefault()
    setLogInData({...logInData, [data.target.name]: data.target.value})
  }

  const {setAccount} = useContext(DataContext);

  const submitLogInData = async (data) => {
    data.preventDefault()
    try {
      
      const url = 'http://localhost:5000/login';

      const logInUser = await axios.post(url, logInData);
      const name = logInUser.data.name;
      const email = logInUser.data.email;
      const token = logInUser.data.SignUpToken;
      const userId = logInUser.data.userId;
      if(logInUser.status === false) window.alert("Invalid Data");

      else {
        localStorage.setItem('Accesstoken', token);
        setAccount({ email: email, name: name});
        localStorage.setItem('userId', userId);
        isUserAuthentication(true);
        navigate('/');
      }
    } catch (error) {
      window.alert(error.response.data.msg);
    }
  }
  return (
    <div className="signUp flex w-full min-h-screen bg-cover bg-center justify-center items-center p-4 py-[110px]">
      <div className="bg-gray-100 fixed flex rounded-2xl shadow-2xl p-5">
        <div className="px-8">
          <h1 className="text-2xl">Log In</h1>
          <p className="mt-4">
            If you are a New Member, Please
            <Link className="text-blue-500" to="/signup">
              {" "}
              Sign Up
            </Link>
          </p>

          <form className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              onChange={changeLogInData}
              name="Email"
              placeholder="Enter Your Email"
            />
            <input
              className="p-2 rounded-xl border"
              type="password"
              onChange={changeLogInData}
              name="Password"
              placeholder="Enter Your Password"
            />
            <button onClick={submitLogInData} className="bg-[#1e376e] rounded-xl text-white py-2 hover:">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
