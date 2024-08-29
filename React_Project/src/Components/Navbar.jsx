import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from '../Images/NovelNest-logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#343131a4] p-4 border-b-4 border-blue-300 h-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <img className="h-10" src={LogoImage} alt="logo-image" />
        </div>
        <div className="md:hidden justify-end items-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex text-lg ${isOpen ? "block" : "hidden"}`}>
          <Link
            to="/"
            className="text-blue-300 font-medium px-3 py-2 rounded hover:bg-blue-300 hover:rounded-lg hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-blue-300 font-medium px-3 py-2 rounded hover:bg-blue-300 hover:rounded-lg hover:text-white"
          >
            Categories
          </Link>
          <Link
            to="/blog"
            className="text-blue-300 font-medium px-3 py-2 rounded hover:bg-blue-300 hover:rounded-lg hover:text-white"
          >
            Blog
          </Link>
          <Link
            to="/bookpublishing"
            className="text-blue-300 font-medium px-3 py-2 rounded hover:bg-blue-300 hover:rounded-lg hover:text-white"
          >
            Book Publishing
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
