import React from "react";
import imgFive from "./../../images/coverFive.jpg";
import FiveModalCoverJS from "./FiveModalCover.js";

const CoverFive = (props) => {
  return (
      <div className="item">
        <img id="5" src={imgFive} width="250" height="250" onClick={FiveModalCoverJS}/>
      </div>
  );
};

export default CoverFive;
