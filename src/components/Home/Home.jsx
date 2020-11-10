import React from "react";
import "./Home.css";
import bigLogo from "./images/logo.jpg";
import Information from "./Information/Information";
import OpenModal from "./Modal/Modal.js";
import ModalWindowJSX from './Modal/ModalWindow.jsx';

const Home = (props) => {
  return (
    <content className="content_home">
      <ModalWindowJSX />
      <div className="content_home__block">
        <div className="content_home__bigLogo">
          <img src={bigLogo} width="300" height="300" />
        </div>
        <Information />
      </div>
      <div className="content__forms">
        <button onClick={OpenModal} className="modal_message">Message</button>
      </div>
    </content>
  );
};

export default Home;
