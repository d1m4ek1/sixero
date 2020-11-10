import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="header_lineBlock__nav">
      <div className="header_lineBlock__navLink">
        <div className="item">
          <NavLink to="/Covers">COVERS</NavLink>
        </div>
        {/* <div className="item">
          <a href="#">BANNERS</a>
        </div> */}
        <div className="item">
          <NavLink to="/Music">MUSIC</NavLink>
        </div>
        <div className="item">
          <NavLink to="/Home">HOME</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;