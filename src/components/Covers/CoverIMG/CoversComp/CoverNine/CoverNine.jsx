import React from 'react';
import imgNine from "./../../images/coverNine.jpg";
import NineModalCoverJS from "./NineModalCover.js";


const CoverNine = (props) => {
    return (
        <div className="item" >
            <img id="9" src={imgNine} width="250" height="250" onClick={NineModalCoverJS}/>
        </div>
    )
}

export default CoverNine;