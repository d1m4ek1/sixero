import React from "react";
import imgEight from "./../../images/coverEight.jpg";
import EightModalCoverJS from "./EightModalCover.js";

const CoverEight = (props) => {
  return (
      <div className="item">
        <img id="8" src={imgEight} width="250" height="250" onClick={EightModalCoverJS}/>
      </div>
  );
};

export default CoverEight;
