import logo from "./images/logo.jpg";
import React from "react";
import "./Header.css";
import Nav from "./Navlink/Nav";

const Header = () => {
  return (
    <header className="header">
      <div className="header_lineBlock">
        <div className="header_liner">
          <div className="header_lineBlock__logo">
            <a href="#">
              {/* <img src={logo} width="75" height="75" /> */}
              SIXERO
            </a>
          </div>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
