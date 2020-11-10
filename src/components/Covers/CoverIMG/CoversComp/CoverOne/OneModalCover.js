import Reat from "react";
import "../../../Covers.jsx";
import imgOne from "./../../images/coverOne.jpg";

const OneModalCoverJS = () => {
    let one = document.querySelector(".modal_cover");
    one.classList.remove("none");

    let oneID = document.getElementById("1");
    let modalMain = document.querySelector(".modal_main");

    if (oneID) {
        let One = `<img src=${imgOne}/>`;
        modalMain.innerHTML = One;
    }
}
export default OneModalCoverJS;
