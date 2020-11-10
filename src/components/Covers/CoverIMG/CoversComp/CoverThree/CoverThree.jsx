import React from "react";
import imgThree from "./../../images/coverThree.jpg";
import ThreeModalCoverJS from "./ThreeModalCover.js";

const CoverThree = (props) => {
  return (
      <div className="item">
        <img id="3" src={imgThree} width="250" height="250" onClick={ThreeModalCoverJS}/>
      </div>
  );
};

export default CoverThree;
