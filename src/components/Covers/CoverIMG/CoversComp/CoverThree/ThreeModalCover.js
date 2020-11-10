import Reat from "react";
import "../../../Covers.jsx";
import imgThree from "./../../images/coverThree.jpg";


const ThreeModalCoverJS = () => {
    let one = document.querySelector(".modal_cover");
    one.classList.remove("none");

    let threeID = document.getElementById("3");
    let modalMain = document.querySelector(".modal_main");

    if (threeID) {
        let Three = `<img src=${imgThree} />`;
        modalMain.innerHTML = Three;
    }
}

export default ThreeModalCoverJS;