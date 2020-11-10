import Reat from "react";
import "../../../Covers.jsx";
import imgSix from "./../../images/coverSix.jpg";


const SixModalCoverJS = () => {
    let one = document.querySelector(".modal_cover");
    one.classList.remove("none");

    let sixID = document.getElementById("6");
    let modalMain = document.querySelector(".modal_main");

    if (sixID) {
        let Six = `<img src=${imgSix} />`;
        modalMain.innerHTML = Six;
    }
}

export default SixModalCoverJS;