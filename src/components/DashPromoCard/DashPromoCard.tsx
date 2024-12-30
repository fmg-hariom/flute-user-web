import React, { useState, useEffect } from "react";
import "./DashPromoCard.css";

const DashPromoCard = ({ items }: any) => {
  const [counter, setCounter] = useState(1);
  const [pause, setPause] = useState(false);
  const list = items;

  const handleNext = () => {
    if (counter !== list.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };

  const handlePre = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    } else {
      setCounter(list.length);
    }
  };

  const handlePage = (page: number) => {
    setCounter(page);
  };

  const handleMouse = () => {
    setPause(!pause);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (!pause) {
        handleNext();
      } else {
        clearInterval(interval);
      }
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div className="text-center p-5  h-auto">
      <div
        className="DashPromoCardSlide"
        // onMouseEnter={handleMouse}
        // onMouseLeave={handleMouse}
      >
        {list.map((item: any, index: any) => (
          <div
            className={
              counter - 1 === index
                ? "DashPromoCardSlideShow"
                : "DashPromoCardSlideNotShow"
            }
            key={index}
          >
            <div>
              <img src={item.image} alt="img1" />
            </div>
          </div>
        ))}

        {/* <button className="prev" onClick={handlePre}>
                    &#10094;
                </button>
                <button className="next" onClick={handleNext}>
                    &#10095;
                </button> */}
      </div>

      {/* <div className="page">
                {content.map((item: any, index: any) => (
                    <span
                        key={index}
                        className={counter - 1 === index ? "dot active" : "dot"}
                        onClick={() => handlePage(index + 1)}
                    />
                ))}
            </div> */}
    </div>
  );
};

export default DashPromoCard;
