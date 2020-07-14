import React from "react";
import logo from "../../../images/logo.png";
import Burger from "./Burger";
import "../navbar/Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
          <a href="/"><img src={logo}alt=""/></a>
      </div>
      <Burger/>
    </nav>
  );
};

export default Navbar;
