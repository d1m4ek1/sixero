import React from "react";
import imgSeven from "./../../images/coverSeven.jpg";
import SevenModalCoverJS from "./SevenModalCover.js";

const CoverSeven = (props) => {
  return (
      <div className="item">
        <img id="7" src={imgSeven} width="250" height="250" onClick={SevenModalCoverJS}/>
      </div>
  );
};

export default CoverSeven;
