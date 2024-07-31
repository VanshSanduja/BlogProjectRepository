import React from "react";
import ProfilePic from '../Images/goku image.jfif'

function Blog() {
  return (
    <div className="signUp flex w-full min-h-screen bg-cover bg-center justify-center items-center p-4 py-[110px]">
      <div className="bg-[#93c4fda3] w-[850px] min-h-1 py-2 md:py-1 md:px-8">
        <div className="flex gap-5 items-center pt-3 md:pt-3 mt-[50px] md:mt-[30px]">
          <img
            className="h-[100px] w-[100px] bg-gray-600 rounded-full border-4 border-gray-950"
            src={ProfilePic}
            alt=""
          />
          <span>
            <a href="https://sqilco.com/">
              <img src="https://sqilco.com/sqilco.svg" alt="logo" />
            </a>
          </span>
          <i className="fa-brands fa-github text-white text-3xl hover:scale-125 duration-300" style={{color: "#000000"}} />
          <i
            className="fa-brands fa-linkedin text-3xl hover:scale-125 duration-300"
            style={{ color: "#1877F2" }}
          ></i>
          <i
            className="fa-brands fa-facebook text-3xl hover:scale-125 duration-300"
            style={{ color: "#1877F2" }}
          ></i>
          <i
            className="fa-brands fa-instagram text-3xl hover:scale-125 duration-300"
            style={{ color: "#E4405F" }}
          ></i>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
          {/* Left side info */}
          <div className="space-y-4 mb-6 md:mb-0 pt-[100px] md:pt-[100px]">
            <h1 className="text-4xl md:text-6xl font-semibold text-white ">
              Hi, I'm{" "}
              <span className="text-black cursor-pointer">
                Vansh Sanduja
              </span>
            </h1>
            <h2 className="text-6xl font-semibold text-white py-4">
              a MERN Stack Developer.
            </h2>
            <p className="text-black max-w-lg">
              I am a MERN stack developer at Sqilco, specializing in building
              and maintaining robust web applications using MongoDB, Express.js,
              React, and Node.js. I integrate complex back-end systems with
              seamless front-end interfaces to deliver efficient and scalable
              solutions.
            </p>
          </div>
          {/* Right side image */}
          <div>
            <img
              src={ProfilePic}
              alt="Ravi"
              className="item-center object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
