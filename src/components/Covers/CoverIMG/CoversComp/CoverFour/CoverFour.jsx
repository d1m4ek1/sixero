import React from "react";
import imgFour from "./../../images/coverFour.jpg";
import FourModalCoverJS from "./FourModalCover.js";

const CoverFour = (props) => {
  return (
      <div className="item">
        <img id="4" src={imgFour} width="250" height="250" onClick={FourModalCoverJS}/>
      </div>
  );
};

export default CoverFour;
