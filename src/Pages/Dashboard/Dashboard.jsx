import React, { useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import { useEffect } from "react";
import Header from "../../Components/Header";
import Pack from "../../Components/Pack";
import Card from "../../Components/Card";
import {
  ArrowBtn,
  RedButton,
  RedButtonIncrement,
  SaveButton,
} from "../../Components/Buttons";
import BigPicture from "../../Components/BigPicture";
import imageList from "../../Assests/Dummy";

const Dashboard = () => {
  const [response, setResponse] = useState([]);
  const [isSelected, setIsSelected] = useState({
    id: 1,
    url: imageList[0].url,
  });
  const [isSelectedModal, setIsSelectedModal] = useState();
  const [count, setCount] = useState(0);
  const [countTotal, setCountTotal] = useState(0);
  const [next, setNext] = useState(0);
  const [show, setShow] = useState(false);
  const [added, setAdded] = useState([]);
  const [activePrev, setActivePrev] = useState(true);
  const [activeNext, setActiveNext] = useState(false);

  const APP_ID = "cae8a2bb";
  const APP_KEY = "c85221f1352260a5ef5c360083b3e3fc";
  const fetchRecipe = async (searchString) => {
    if (searchString.length) {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=24&calories=591-722&health=alcohol-free`
      );
      setResponse(response.data.hits);
    }
  };
  useEffect(() => {
    fetchRecipe("chicken");
  }, []);
  const handleSelect = (id, url) => {
    setIsSelected({ id: id, url: url });
  };
  const handleCountInc = () => {
    const temp = count + 1;
    setCount(temp);
  };
  const handleCountDec = () => {
    const temp = count - 1;
    setCount(temp);
  };
  const handleAdd = (index) => {
    const temp = countTotal + 1;
    setCountTotal(temp);
    setAdded((added) => [...added, index]);
  };
  const handleRemove = (index) => {
    const temp1 = added.filter((i) => i !== index);
    setAdded(temp1);
    const temp2 = countTotal - 1;
    setCountTotal(temp2);
  };
  const handleNext = () => {
    if (next + 4 >= response?.length - 1) {
      setActivePrev(false);
      setActiveNext(true);
    } else {
      let temp = next + 4;
      setNext(temp);
      setActivePrev(false);
      setActiveNext(false);
    }
  };
  const handlePrev = () => {
    if (next - 4 < 0) {
      setActiveNext(false);
      setActivePrev(true);
    } else {
      let temp = next - 4;
      setNext(temp);
      setActiveNext(false);
      setActivePrev(false);
    }
  };
  const handleOpen = (id) => {
    setShow(!show);
    setIsSelectedModal(id);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="main-container">
      <div className="container">
        <div className="header">
          <Header count={count + countTotal} />
        </div>
        <div className="body">
          <div className="seg1">
            <div className="seg1-sub1">
              {imageList.map((ele) => {
                return (
                  <div
                    className={
                      isSelected?.id === ele.id ? "border-image" : "image"
                    }
                    onClick={() => handleSelect(ele.id, ele.url)}
                  >
                    <img className="img1" src={ele.url} />
                  </div>
                );
              })}
            </div>
            <div className="seg1-sub2">
              <BigPicture img={isSelected?.url} />
            </div>
            <div className="seg1-sub3">
              <div className="t1">
                <u>Fresho</u>
              </div>
              <div className="t2">Fresho Tomato - Local (Loose), 500 g</div>
              <div className="t3">MRP: ₹9.21</div>
              <div className="t4">
                Price: ₹7 <span className="t9">(₹0.01 / g)</span>
              </div>
              <div className="t5">You Save: 24% OFF</div>
              <div className="t6">(inclusive of all taxes)</div>
              <div className="buy">
                <div className="red-btn">
                  {count == 0 ? (
                    <RedButton onClick={handleCountInc} />
                  ) : (
                    <RedButtonIncrement
                      count={count}
                      onClickInc={handleCountInc}
                      onClickDec={handleCountDec}
                    />
                  )}
                </div>
                <div className="save-later">
                  <SaveButton text={"Save for later"} icon={true} />
                </div>
              </div>
              <div className="t7">Earliest: Get it in 3 hrs</div>
              <div className="t8">Pack sizes</div>
              <div className="pack">
                <Pack />
              </div>
            </div>
          </div>
          <div className="seg2">
            <div className="seg2-sub1">
              <div className="heading">Frequently Bought Together</div>
              <div className="arrows">
                <ArrowBtn
                  symbol={"prev"}
                  active={activePrev}
                  onClick={handlePrev}
                />
                <ArrowBtn
                  symbol={"next"}
                  active={activeNext}
                  onClick={handleNext}
                />
              </div>
            </div>
            <div className="seg2-sub2">
              {response?.slice(next, next + 4)?.map((item, index) => {
                return (
                  <>
                    <Card
                      item={item?.recipe}
                      show={show}
                      isSelectedModal={isSelectedModal}
                      handleOpen={handleOpen}
                      index={index}
                      onClickInc={handleAdd}
                      added={added}
                      onClickRemove={handleRemove}
                      setShow={setShow}
                      close={handleClose}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
