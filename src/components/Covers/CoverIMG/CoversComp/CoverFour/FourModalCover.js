import Reat from "react";
import "../../../Covers.jsx";
import imgFour from "./../../images/coverFour.jpg";


const FourModalCoverJS = () => {
    let one = document.querySelector(".modal_cover");
    one.classList.remove("none");

    let fourID = document.getElementById("4");
    let modalMain = document.querySelector(".modal_main");

    if (fourID) {
        let Four = `<img src=${imgFour} />`;
        modalMain.innerHTML = Four;
    }
}

export default FourModalCoverJS;