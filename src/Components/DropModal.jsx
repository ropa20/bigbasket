import React, { useEffect, useRef } from "react";
import Pack from "./Pack";
import "./DropModal.css";
const DropModal = ({ close }) => {
  console.log(close);
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [close]);
  return (
    <div className="drop-container" ref={modalRef}>
      <div
        className="box"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <div className="modal">
          <Pack />
        </div>
      </div>
    </div>
  );
};

export default DropModal;
