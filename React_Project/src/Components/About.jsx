import React from "react";
import Images from '../Images/Book-Background.jpg';

function About() {
  return (
    <div className="h-screen w-full">
      <img
        src={Images}
        className="h-full w-full object-cover"
        alt="background"
      ></img>
      <div className="flex absolute justify-center items-center top-[50%] left-[50%] w-3 text-[#fff]">
        <h1 className="mx-5">About</h1>
        <h1 className="mx-5">About</h1>
        <h1 className="mx-5">About</h1>
        <h1 className="mx-5">About</h1>
        <h1 className="mx-5">About</h1>
      </div>
    </div>
  );
}

export default About;
