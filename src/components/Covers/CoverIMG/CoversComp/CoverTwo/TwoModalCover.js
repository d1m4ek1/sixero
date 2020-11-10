import Reat from "react";
import "../../../Covers.jsx";
import imgTwo from "./../../images/coverTwo.jpg";


const TwoModalCoverJS = () => {
    let one = document.querySelector(".modal_cover");
    one.classList.remove("none");

    let twoID = document.getElementById("2");
    let modalMain = document.querySelector(".modal_main");

    if (twoID) {
        let Two = `<img src=${imgTwo} />`;
        modalMain.innerHTML = Two;
    }
}

export default TwoModalCoverJS;