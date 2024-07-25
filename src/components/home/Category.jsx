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
import "../Styles/home.css";

function Category() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
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
          centerPadding: "10px",
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
          centerPadding: "10px",
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
        <Link to="/crops" className="flex flex-col items-center mx-0.5">
          <img src={Crops} alt="Crops" className="w-64 h-40 object-cover" />
          <p className="text-xl font-semibold leading-9 text-center mt-2">
            Crops
          </p>
        </Link>
        <Link to="/livestock" className="flex flex-col items-center mx-0.5">
          <img
            src={Livestock}
            alt="Livestock"
            className="w-64 h-40 object-cover"
          />
          <p className="text-xl font-semibold leading-9 text-center mt-2">
            Livestock
          </p>
        </Link>
        <Link to="/poultry" className="flex flex-col items-center mx-0.5">
          <img
            src={Poultry}
            alt="Poultry Products"
            className="w-64 h-40 object-cover"
          />
          <p className="text-xl font-semibold leading-9 text-center mt-2">
            Poultry Products
          </p>
        </Link>
        <Link to="/aquaculture" className="flex flex-col items-center mx-0.5">
          <img
            src={Aqua}
            alt="Aquaculture"
            className="w-64 h-40 object-cover"
          />
          <p className="text-xl font-semibold leading-9 text-center mt-2">
            Aquaculture
          </p>
        </Link>
        <Link to="/forestry" className="flex flex-col items-center mx-0.5">
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

export default Category;
