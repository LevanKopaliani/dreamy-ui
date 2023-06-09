import React from "react";
import "./Modal.css";
import CloseButton from "./close.svg";

const Modaldiv = (props) => {
  Modaldiv.defaultProps = {
    closeButton: true,
  };

  if (!props.openModal) return null;

  return (
    <>
      <div
        className="dreamy-modal-backdrop"
        onClick={() => props.onCloseModal(false)}
      ></div>
      <div
        className={
          props.className ? `${props.className} dreamy-modal` : "dreamy-modal"
        }
      >
        {props.closeButton && (
          <button
            className="modal-closebutton"
            onClick={() => props.onCloseModal(false)}
          >
            <img src={CloseButton} alt="close" />
          </button>
        )}
        {props.heading && (
          <div className="modal-heading">
            {props.heading || "dialog heading"}
          </div>
        )}
        <div className="modal-body">{props.children}</div>
      </div>
    </>
  );
};

export { Modaldiv };
