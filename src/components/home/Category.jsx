import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Crops from "./images/crops.png";
import Livestock from "./images/livestock.png";
import Poultry from "./images/poultry.png";
import Aqua from "./images/aqua.png";
import Forestry from "./images/forestry.png";

function Category() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold leading-9 mb-5">
        Shop by categories
      </h2>
      <Slider {...settings}>
        <Link to="/crops" className="flex flex-col items-center">
          <img src={Crops} alt="Crops" className="w-64 h-40 object-cover" />
          <p className="text-xl font-semibold leading-9 text-center mt-2">
            Crops
          </p>
        </Link>
        <Link to="/livestock" className="flex flex-col items-center">
          <img
            src={Livestock}
            alt="Livestock"
            className="w-64 h-40 object-cover"
          />
          <p className="text-xl font-semibold leading-9 text-center mt-2">
            Livestock
          </p>
        </Link>
        <Link to="/poultry" className="flex flex-col items-center">
          <img
            src={Poultry}
            alt="Poultry Products"
            className="w-64 h-40 object-cover"
          />
          <p className="text-xl font-semibold leading-9 text-center mt-2">
            Poultry Products
          </p>
        </Link>
        <Link to="/aquaculture" className="flex flex-col items-center">
          <img
            src={Aqua}
            alt="Aquaculture"
            className="w-64 h-40 object-cover"
          />
          <p className="text-xl font-semibold leading-9 text-center mt-2">
            Aquaculture
          </p>
        </Link>
        <Link to="/forestry" className="flex flex-col items-center">
          <img
            src={Forestry}
            alt="Forestry"
            className="w-64 h-40 object-cover"
          />
          <p className="text-xl font-semibold leading-9 text-center mt-2">
            Forestry
          </p>
        </Link>
      </Slider>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export default Category;
