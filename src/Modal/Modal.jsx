import React, { useRef, useEffect } from "react";
import "./Modal.css";
import CloseButton from "./close.svg";

const Modal = (props) => {
  const modalRef = useRef();

  useEffect(() => {
    if (props.openModal) {
      modalRef.current.showModal();

      const offset = {
        left: modalRef.current.offsetLeft,
        top: modalRef.current.offsetTop,
        right: modalRef.current.offsetLeft + modalRef.current.offsetWidth,
        bottom: modalRef.current.offsetTop + modalRef.current.offsetHeight,
      };

      const dialog = document
        .querySelector("dialog")
        .addEventListener("click", (e) => {
          if (
            e.x < offset.left ||
            e.x > offset.right ||
            e.y < offset.top ||
            e.y > offset.bottom
          ) {
            modalRef.current.close();
            props.onCloseModal(false);
          }
        });
    }

    return () => {
      modalRef.current.close();
    };
  }, [props.openModal]);

  return (
    <dialog ref={modalRef} className={props.className}>
      {props.children}
    </dialog>
  );
};

export { Modal };
