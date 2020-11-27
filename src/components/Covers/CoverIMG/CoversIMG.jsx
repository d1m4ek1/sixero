import React from "react";
import "./CoversIMG.css";
import CoverOne from "./CoversComp/CoverOne/CoverOne.jsx";
import CoverTwo from "./CoversComp/CoverTwo/CoverTwo.jsx";
import CoverThree from "./CoversComp/CoverThree/CoverThree.jsx";
import CoverFour from "./CoversComp/CoverFour/CoverFour.jsx";
import CoverFive from "./CoversComp/CoverFive/CoverFive.jsx";
import CoverSix from "./CoversComp/CoverSix/CoverSix.jsx";
import CoverSeven from "./CoversComp/CoverSeven/CoverSeven";
import CoverEight from "./CoversComp/CoverEight/CoverEight";
import CoverNine from "./CoversComp/CoverNine/CoverNine.jsx";

const CoversIMG = (props) => {
  return (
      <div className="content_covers__img">
        <CoverOne />
        <CoverTwo />
        <CoverThree />
        <CoverFour />
        <CoverFive />
        <CoverSix />
        <CoverSeven />
        <CoverEight />
        <CoverNine />
    </div>
  );
};

export default CoversIMG;
