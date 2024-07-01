import React, { useState, useEffect } from "react";
import "../Styles/home.css";
import Ijebu from "../home/images/ijebu.png";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Deal = () => {
  const [timeLeft, setTimeLeft] = useState(18 * 3600 + 27 * 60 + 29); // Initial time in seconds
  const [itemsLeft, setItemsLeft] = useState(15);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => (prevTimeLeft > 0 ? prevTimeLeft - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h : ${m}m : ${s}s`;
  };

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="container rounded-lg p-6 font-poppins">
      <div className="deal-header bg-[#4BAF47] text-white p-4 flex justify-between items-center rounded-t-lg">
        <h2 className="text-lg font-bold">Deal of the day</h2>
        <span className="text-sm">Time Left: {formatTime(timeLeft)}</span>
        <a href="#" className="text-white">
          See all
        </a>
      </div>
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        prevIcon={
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        }
        nextIcon={
          <span className="carousel-control-next-icon" aria-hidden="true" />
        }
        indicators={true}
        className="p-10"
      >
        {[...Array(4)].map((_, index) => (
          <Carousel.Item key={index}>
            <div className="flex flex-col md:flex-row my-4 items-center justify-center">
              <img
                src={Ijebu}
                alt="Freeland Ijebu Garri 5kg"
                className="object-cover w-full md:w-auto"
              />
              <div className="ml-0 md:ml-8 mt-4 md:mt-0 flex flex-col justify-center text-center md:text-left">
                <h3 className="text-xl font-bold">
                  FREELAND - IJEBU GARRI - 5kg
                </h3>
                <div className="flex items-center justify-center md:justify-start my-2">
                  <span className="text-yellow-500">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </span>
                </div>
                <div className="text-2xl text-[#4BAF47] font-bold">
                  $850.00{" "}
                  <span className="line-through text-gray-400">$950.00</span>
                </div>
                <button className="bg-[#4BAF47] text-white px-4 py-2 rounded mt-4">
                  Add to Cart
                </button>
                <div className="mt-2 text-gray-500">{itemsLeft} items left</div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Deal;
