import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import burgAtc from './Burger.js';


const NavMobile = () => {
  return (
    <nav className="header_circle__nav">
      <div className="header_block__nav">
        <div className="header_btn__circle">
          <div className="burger" onClick={burgAtc}>
            <span className="burger_line burger_line__first"></span>
            <span className="burger_line burger_line__second"></span>
            <span className="burger_line burger_line__third"></span>
            <span className="burger_line burger_line__fourth"></span>
          </div>
        </div>
        <div className="header_navItems__nav">
          <div className="itemCircle">
            <NavLink to="/Covers">COVERS</NavLink>
          </div>
          <div className="itemCircle">
            <NavLink to="/Music">MUSIC</NavLink>
          </div>
          <div className="itemCircle">
            <NavLink to="/Home">HOME</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMobile;