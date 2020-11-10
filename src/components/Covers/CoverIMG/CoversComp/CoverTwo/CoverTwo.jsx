import React from "react";
import imgTwo from "./../../images/coverTwo.jpg";
import TwoModalCoverJS from "./TwoModalCover.js";


const CoverTwo = (props) => {
  return (
    <div className="item">
      <img id="2" src={imgTwo} width="250" height="250" onClick={TwoModalCoverJS}/>
    </div>
  );
};

export default CoverTwo;
