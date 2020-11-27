import Reat from "react";
import "../../../Covers.jsx";
import imgNine from "./../../images/coverNine.jpg";

const NineModalCoverJS = () => {
    let one = document.querySelector(".modal_cover");
    one.classList.remove("none");

    let nineID = document.getElementById("9");
    let modalMain = document.querySelector(".modal_main");

    if (nineID) {
        let Nine = `<img src=${imgNine}/>`;
        modalMain.innerHTML = Nine;
    }
}
export default NineModalCoverJS;
