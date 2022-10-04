import React, { useState } from "react";

import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { images } from "../../constants";

const Navbar =function() {
  const [isShow, setIsShow] =useState(false);
  return (
  <div className="app__navbar">
    <div className="app_navbar-logo">
      <a href="/">
        <img src={images.gericht} alt="app logo" />
      </a>
    </div>
    <ul className="app_navbar-links">
      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#about">About</a>
      </li>
      <li className="p__opensans">
        <a href="#menu">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#award">Awards</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className="p__opensans">
        Log In / Register
      </a>
      <div></div>
      <a href="/" className="p__opensans">
        Book Table
      </a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} className="app__navbar-smallscreen-menu" onClick={() => setIsShow(true)} />

      {isShow && (
        <div className="app__navbar-smallscreen-overlay app__bg">
        <MdOutlineRestaurantMenu className="offShow" color="#fff" fontSize={27} onClick={() => setIsShow(false)}/>
        <ul className="app_navbar-smallscreen-links">
          <li className="p__opensans" >
  
            <a onClick={() => setIsShow(false)} href="#home">Home</a>
          </li>
          <li className="p__opensans" >
  
            <a onClick={() => setIsShow(false)} href="#about">About</a>
          </li>
          <li className="p__opensans" >
  
            <a onClick={() => setIsShow(false)} href="#menu">Menu</a>
          </li>
          <li className="p__opensans" >
  
            <a onClick={() => setIsShow(false)} href="#award">Awards</a>
          </li>
          <li className="p__opensans" >
  
            <a onClick={() => setIsShow(false)} href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      )}
      
    </div>
  </div>
)};

export default Navbar;
