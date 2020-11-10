import React from "react";
import "./ModalWindow.css";
import "./Modal.js";
import closeModalJS from "./closeModal.js";

const ModalWindowJSX = () => {
  return (
    <div className="modal_content none">
      <div className="modal_content__block">
        <div className="modal_content__blockWindow">
          <div className="header_modal">
            <div onClick={closeModalJS} className="modal_close">
              <p>close</p>
            </div>
            <div className="modal_title">
              <p>Send message SIXERO</p>
            </div>
            <hr className="line" />
          </div>
          <form className="modal_form__block">
            <div className="inputs_block__name">
              <div className="block__name">
                <p>
                  First name{" "}
                  <input
                    className="input_Name"
                    id="firstName"
                    type="text"
                    placeholder="First name..."
                  />
                </p>
                <p>
                  Last name{" "}
                  <input
                    className="input_Name"
                    id="lastName"
                    type="text"
                    placeholder="Last name..."
                  />
                </p>
              </div>
            </div>
            <hr className="line" />
            <div className="input_block__message">
              <div className="block__message">
              <p>Message</p>
              <textarea
                id="input_message"
                className="input_messages"
                placeholder="Enter your message..."
              ></textarea>
              </div>
            </div>
            <div className="input_block__button">
              <input
                className="input_btn"
                id="btn"
                type="button"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalWindowJSX;
