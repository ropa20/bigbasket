import React from "react";
import { useState } from "react";
import { Add, Added, DropButton, SaveBtn } from "./Buttons";
import "./Card.css";
import DropModal from "./DropModal";
const Card = ({
  item,
  show,
  handleOpen,
  isSelectedModal,
  index,
  onClickInc,
  onClickRemove,
  added,
  setShow,
}) => {
  const [list, setList] = useState([item]);
  return (
    <>
      {list?.map((ele) => {
        return (
          <div className="card-main-container">
            <div className="card-container">
              <div className="card">
                <div className="off">30% OFF</div>
                <img className="card-img" src={item?.image} />
              </div>
              <div className="card-info">
                <div className="fresho">Fresho</div>
                <div className="title">{ele.label}</div>
                <div className="dropdown">
                  <DropButton
                    text={ele.totalTime}
                    handleOpen={handleOpen}
                    id={index}
                  />
                </div>
                <div className="price">
                  <div className="offer-price">₹68</div>
                  <div className="original-price">
                    <s>₹89.47</s>
                  </div>
                </div>
                <div className="save-add">
                  <div className="save">
                    <SaveBtn />
                  </div>
                  <div className="add-btn">
                    {added.includes(index) ? (
                      <Added onClickRemove={onClickRemove} index={index} />
                    ) : (
                      <Add onClickInc={onClickInc} index={index} />
                    )}
                  </div>
                </div>
              </div>
              <div className="dots">...</div>
            </div>
            {isSelectedModal === index && show && (
              <DropModal
                close={() => {
                  setShow(false);
                }}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default Card;
