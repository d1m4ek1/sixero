import React from 'react';
import imgOne from "./../../images/coverOne.jpg";
import OneModalCoverJS from "./OneModalCover.js";


const CoverOne = (props) => {
    return (
        <div className="item" >
            <img id="1" src={imgOne} width="250" height="250" onClick={OneModalCoverJS}/>
        </div>
    )
}

export default CoverOne;