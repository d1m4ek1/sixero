import React from "react";
import "./ModalCover.css";
import ClosedModalCoverJS from "./ClosedModalCovers.js";

const ModalCover = (props) => {
  return (
    <div className="modal_cover none">
      <div className="close_modal_cover" onClick={ClosedModalCoverJS}>
        <p className="closed_modal" >
          close
        </p>
      </div>
      <div className="modal_block">
        <div className="modal_main"></div>
      </div>
    </div>
  );
};

export default ModalCover;
