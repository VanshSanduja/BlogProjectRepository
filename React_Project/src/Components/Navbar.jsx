// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../Images/nav logo.png";
import UserImage from "../Images/goku image.jfif";

export default function Example() {
  const [down, setDown] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <div className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <div className="flex justify-center items-end lg:hidden md:hidden sm:block">
                <i
                  onClick={toggleMenu}
                  className="fa-solid fa-bars fa-flip-vertical fa-2xl text-blue-300 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img alt="Your Company" src={LogoImage} className="h-12 w-auto" />
            </div>
            <div className="hidden md:flex md:items-center sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <ul
                  className={`flex flex-col justify-center items-center gap-4 text-blue-300 font-semibold md:flex-row md:gap-8 ${
                    menuOpen
                      ? "top-14 opacity-100 bg-gray-800 border-blue-300"
                      : "top-[-490px] opacity-0 md:opacity-100"
                  } transition-all duration-500 ease-in-out md:top-0`}
                >
                  <Link to="/">
                    <li>Home</li>
                  </Link>
                  <li>
                    <div
                      onClick={() => setDown((prev) => !prev)}
                      className="hover:text-blue-600 px-2 hover:bg-white rounded-md cursor-pointer flex items-center border-transparent active:border-black duration-500 active:text-white"
                    >
                      Categories
                      <div className="ml-2">
                        {!down ? (
                          <i className="fa-solid fa-angle-up"></i>
                        ) : (
                          <i className="fa-solid fa-angle-down"></i>
                        )}
                      </div>
                    </div>
                    {/* Dropdown Content */}
                    {down && (
                      <div className="absolute mt-1 w-[155px]">
                        <div className="bg-white h-[120px] rounded-md flex flex-col justify-evenly items-center">
                          <Link to="/categories">
                            <h1 className="text-black">Self-improvement</h1>
                          </Link>
                          <Link to="/categories">
                            <h1 className="text-black">Non-Fiction</h1>
                          </Link>
                        </div>
                      </div>
                    )}
                  </li>
                  <Link to="/blog">
                    <li>Blog</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
            </button> */}

            {/* Profile dropdown */}
            <div as="div" className="relative ml-3">
              <div>
                <div className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src={UserImage}
                    className="h-12 w-18 rounded-full"
                  />
                </div>
              </div>
              {/* <div
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </a>
                </div>
                <div>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </div>
                <div>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2"></div>
      </div>
    </div>
  );
}
