import React from "react";
import "./Buttons.css";
import save from "../Assests/save.png";
import { FaChevronDown } from "react-icons/fa";

export const RedButton = ({ onClick }) => {
  return (
    <button className="redBtn" onClick={onClick}>
      Add
    </button>
  );
};
export const RedButtonIncrement = ({ onClickInc, count, onClickDec }) => {
  return (
    <button className="redBtnInc">
      <span className="minus" onClick={onClickDec}>
        -
      </span>
      <span className="count">{count}</span>
      <span className="plus" onClick={onClickInc}>
        +
      </span>
    </button>
  );
};
export const SaveButton = ({ text, icon }) => {
  return (
    <button className="saveBtn">
      {icon && <img className="icon" src={save} />}
      <span>
        <span>{text}</span>
      </span>
    </button>
  );
};
export const DropButton = ({ text, handleOpen, id }) => {
  return (
    <button
      className="dropBtn"
      onClick={() => {
        handleOpen(id);
      }}
    >
      <span className="text">{text}g</span>
      <span>
        <FaChevronDown />
      </span>
    </button>
  );
};
export const SaveBtn = () => {
  return (
    <button className="save">
      <img className="icon" src={save} />
    </button>
  );
};
export const Add = ({ onClickInc, index }) => {
  return (
    <button className="add" onClick={() => onClickInc(index)}>
      Add
    </button>
  );
};
export const Added = ({ onClickRemove, index }) => {
  return (
    <button className="added" onClick={() => onClickRemove(index)}>
      Added
    </button>
  );
};
export const ArrowBtn = ({ symbol, onClick, active }) => {
  return (
    <button className="arrow" disabled={active} onClick={onClick}>
      {symbol === "prev" && <>&lt;</>}
      {symbol === "next" && <>&gt;</>}
    </button>
  );
};
