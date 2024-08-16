import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/NovelNest-logo.png";

function TestNavbar() {
  const [down, setDown] = useState(false);

  const barChanged = () => {
    setDown(!down);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div>
      <nav className="md:flex md:justify-between md:items-center w-full px-6 fixed bg-[#343131a4] border-b-4 border-blue-300 top-0">
        {/* Left-Navbar-Logo */}
        <div>
        <Link to='/'><img className="h-12 w-18" src={Logo} alt="navbar-logo" /></Link>
        </div>
        {/* Center-Navbar-Items */}
        <ul className={`flex justify-center items-center gap-16 text-blue-300 text-xl ${
            menuOpen
            ? "top-14 opacity-100 bg-[#343131a4] border-blue-300"
            : "top-[-490px] opacity-0 md:opacity-100"
            } transition-all duration-500 ease-in-out md:top-0`}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>Categories</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
        </ul>
        {/* Right-Navbar-Buttons */}
        <div className="flex justify-center items-center">
          <button className="w-16 bg-blue-300 text-white hover:bg-white hover:text-blue-300 p-2 mx-2 font-semibold rounded-lg hover:shadow-[0_3px_8px_rgb(147,197,253,0.50)]">Login</button>
          <button className="w-20 bg-black text-white hover:bg-white hover:text-black p-2 mx-2 font-semibold rounded-lg hover:shadow-[0_3px_8px_rgb(147,197,253,0.50)]">SignUp</button>
        </div>
        {/* BarIcons div */}
        <div className="flex justify-center items-end lg:hidden md:hidden sm:block">
          {down ? (
            <i
            //   onClick={barChanged}
              onClick={toggleMenu}
              className="fa-solid fa-bars fa-xmark fa-2xl text-blue-300 cursor-pointer"
            />
          ) : (
            <i
            onClick={toggleMenu}
              className="fa-solid fa-bars fa-flip-vertical fa-2xl text-blue-300 cursor-pointer"
            />
          )}
        </div>
      </nav>
    </div>
  );
}

export default TestNavbar;
