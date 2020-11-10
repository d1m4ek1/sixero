import React from "react";
import CoversIMG from "./CoverIMG/CoversIMG.jsx";
import "./Covers.css";
import ModalCover from "./ModalCover/ModalCover.jsx";

const Covers = (props) => {
  return (
    <content className="content_covers">
        <ModalCover />
      <div className="content_cover__title">
        <p className="covers_title">COVERS</p>
      </div>
      <div className="content_covers__block">
        <CoversIMG />
      </div>
    </content>
  );
};

export default Covers;
