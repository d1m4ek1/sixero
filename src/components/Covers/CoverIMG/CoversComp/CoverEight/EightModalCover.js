import Reat from "react";
import "../../../Covers.jsx";
import imgEight from "./../../images/coverEight.jpg";


const EightModalCoverJS = () => {
    let one = document.querySelector(".modal_cover");
    one.classList.remove("none");

    let eightID = document.getElementById("8");
    let modalMain = document.querySelector(".modal_main");

    if (eightID) {
        let Eight = `<img src=${imgEight} />`;
        modalMain.innerHTML = Eight;
    }
}

export default EightModalCoverJS;