import React, { useState } from 'react';
import React from "react";import LogoTenderSafi  from '../assets/images/LogoTenderSafi.svg';
import { Link } from "react-router-dom";



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log("clicked");
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex justify-between items-center my-8 mx-2 sm:mx-16">
      <div>
        <img src={LogoTenderSafi} alt="" />

      </div>
      <div className="block sm:hidden">
        <i class="bx bx-menu bx-md text-black" onClick={toggleMenu}></i>
      </div>
      <div
        className="absolute top-0 sm:block p-5 sm:p-0 min-w-[200px] w-[100%]"
        style={showMenu ? { display: "block" } : { display: "none" }}
      >
        <nav>
          <i class="bx bx-x bx-sm text-black" onClick={toggleMenu}></i>
          <ul className=" flex flex-col sm:flex-row justify-around font-josefin text-base md:text-lg text-black font-extrabold w-auto">
            <Link to={"/"}>
              <li className="my-2 mx-1 w-[100%] min-w-[100px] ">Home</li>
            </Link>
            <Link to={"/features"}>
              <li className="my-2 mx-1 w-[100%] min-w-[100px] ">Features</li>
            </Link>
            <Link to={"/contact"}>
              <li className="my-2 mx-1 w-[100%] min-w-[100px] ">Contact Us</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="hidden sm:block">
        <nav>
          <ul className=" flex flex-col sm:flex-row justify-around font-josefin text-base md:text-lg text-black font-extrabold w-auto">
            <Link to={"/"}>
              <li className="mx-1 w-[100%] min-w-[100px] ">Home</li>
            </Link>
            <Link to={"/features"}>
              <li className="mx-1 w-[100%] min-w-[100px] ">Features</li>
            </Link>
            <Link to={"/contact"}>
              <li className="mx-1 w-[100%] min-w-[100px] ">Contact Us</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="hidden sm:block">
        <Link to="/AvailableTenders">
        <button className="bg-primary-color font-josefin text-white py-2 px-4 rounded-full">Get Started</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Navbar;

