import React from "react";
import images from "../Images/nav logo.png";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      className=" flex fixed bg-[#80808048] w-full h-auto justify-evenly items-center mx-auto border-b-4 border-blue-300"
      style={{ fontFamily: '"Be Vietnam Pro", sans-serif' }}
    >
      <div>
        <img className="size-14" src={images} alt="navbar-logo" />
      </div>
      <div>
        <ul className="flex mx-8">
          <li className="mx-5 text-[#fff]">
            <Link to='/'>Home</Link>
            </li>
          <li className="mx-5 text-[#fff]">
            <Link to='/about'>About</Link>
            </li>
          <li className="mx-5 text-[#fff]">
          <Link to='/contact'>Contact</Link>
            </li>
          <li className="mx-5 text-[#fff]">
          <Link to='/blog'>Blogs</Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="bg-blue-300 text-[#000] rounded-lg w-20 mx-10 h-10 hover:border-2 hover:border-black ">
          <Link to='/login'>Log In</Link>
        </button>
        <button className="bg-white text-[#000] rounded-lg w-20 mx-5 h-10 hover:border-2 hover:border-green-500">
          <Link to='/signup'>Sign Up</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
