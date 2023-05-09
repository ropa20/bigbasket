import React, { useState } from "react";
import "./Pack.css";
const Pack = () => {
  const [isSelected, setIsSelected] = useState();
  const handleSelect = (id) => {
    setIsSelected(id);
  };
  const packList = [
    {
      id: 1,
      unit: "500kg",
      price: "₹13.5",
      amt: "(₹13.5 / kg)",
      actual_price: "₹ 18.42",
      off: "20%",
    },
    {
      id: 2,
      unit: "500kg",
      price: "₹13.5",
      amt: "(₹13.5 / kg)",
      actual_price: "₹ 18.42",
      off: "20%",
    },
    {
      id: 3,
      unit: "500kg",
      price: "₹13.5",
      amt: "(₹13.5 / kg)",
      actual_price: "₹ 18.42",
      off: "20%",
    },
  ];
  return (
    <>
      {packList.map((item) => {
        return (
          <div
            className={
              isSelected === item.id
                ? "pack-container-border"
                : "pack-container"
            }
            onClick={() => handleSelect(item.id)}
          >
            <div className="pack-seg1">
              <div className="pack-t1">{item.unit}</div>
            </div>
            <div className="pack-seg2">
              <div className="pack-t2">
                <div className="pack-t1">{item.price}</div>
                <div className="section2">{item.amt}</div>
              </div>
              <div className="pack-t3">
                <div className="section3">
                  <s>{item.actual_price}</s>
                </div>
                <div className="section4">{item.off} OFF</div>
              </div>
            </div>
            {isSelected === item.id ? (
              <div className="pack-seg3">L</div>
            ) : (
              <div> </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Pack;
