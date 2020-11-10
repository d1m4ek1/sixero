import React from "react";
import imgSix from "./../../images/coverSix.jpg";
import SixModalCoverJS from "./SixModalCover.js";

const CoverSix = (props) => {
  return (
      <div className="item">
        <img id="6" src={imgSix} width="250" height="250" onClick={SixModalCoverJS}/>
      </div>
  );
};

export default CoverSix;
