import Reat from "react";
import "../../../Covers.jsx";
import imgSeven from "./../../images/coverSeven.jpg";


const SevenModalCoverJS = () => {
    let one = document.querySelector(".modal_cover");
    one.classList.remove("none");

    let sevenID = document.getElementById("7");
    let modalMain = document.querySelector(".modal_main");

    if (sevenID) {
        let Seven = `<img src=${imgSeven} />`;
        modalMain.innerHTML = Seven;
    }
}

export default SevenModalCoverJS;