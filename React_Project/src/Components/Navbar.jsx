import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../Images/nav logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav
        className="flex fixed bg-[#343131a4] w-full md:h-auto sm:h-auto sm:transition-all duration-300 ease-in-out md:top-0 md:justify-between items-center mx-auto border-b-4 border-blue-300"
        style={{ fontFamily: '"Be Vietnam Pro", sans-serif' }}
      >
        <div>
          <img className="size-14 mx-12" src={images} alt="navbar-logo" />
        </div>
        <div
          className={`absolute max-w-5xl w-full flex flex-col items-center text-lg md:static md:flex md:flex-row md:justify-between ${
            menuOpen
              ? "top-16 opacity-100"
              : "top-[-490px] opacity-0 md:opacity-100"
          } transition-all duration-300 ease-in-out md:top-0`}
        >
          <ul className="flex flex-col mx-8 md:flex-row md:gap-8">
            <li className="relative lg:mx-5 text-blue-300 my-2 w-fit block mx-3 md:my-0 md:top-0">
              <Link
                to="/"
                className="relative block after:block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-blue-300 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">All Books
              </Link>
            </li>

            <li className="relative lg:mx-5 text-blue-300 my-2 w-fit block mx-3 md:my-0 md:top-0">
              <Link to="/about" className="relative block after:block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-blue-300 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">Categories</Link>
            </li>
            <li className="relative lg:mx-5 text-blue-300 my-2 w-fit block mx-3 md:my-0 md:top-0">
              <Link to="/contact" className="relative block after:block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-blue-300 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">New Arrivals</Link>
            </li>
            <li className="relative lg:mx-5 text-blue-300 my-2 w-fit block mx-3 md:my-0 md:top-0">
              <Link to="/blog" className="relative block after:block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-blue-300 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">Blogs</Link>
            </li>
          </ul>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <button className="bg-blue-300 text-[#000] rounded-lg w-20 mx-[1px] h-10 my-2 md:my-0 hover:border-2 hover:border-black">
              <Link to="/login">Log In</Link>
            </button>
            <button className="bg-white text-[#000] rounded-lg w-20 mx-[1px] h-10 my-2 md:my-0 hover:border-2 hover:border-green-500">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
        <div className="lg:hidden md:hidden sm:block cursor-pointer" onClick={toggleMenu}>
          <i
            className="fa-solid fa-bars fa-flip-vertical fa-2xl fixed mx-2 my-0.5"
            style={{ color: "#74C0FC" }}
          ></i>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
