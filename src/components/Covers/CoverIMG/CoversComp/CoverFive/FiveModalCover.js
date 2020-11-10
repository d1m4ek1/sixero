import Reat from "react";
import "../../../Covers.jsx";
import imgFive from "./../../images/coverFive.jpg";


const FiveModalCoverJS = () => {
    let one = document.querySelector(".modal_cover");
    one.classList.remove("none");

    let fiveID = document.getElementById("5");
    let modalMain = document.querySelector(".modal_main");

    if (fiveID) {
        let Five = `<img src=${imgFive} />`;
        modalMain.innerHTML = Five;
    }
}

export default FiveModalCoverJS;