// import React from "react";
import hero1 from "../home/images/hero.png";
import hero2 from "../home/images/hero.png";
import hero3 from "../home/images/hero.png";
import hero4 from "../home/images/hero.png";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/home.css";
import shop from "./images/cart-pic.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="carousel hero-container mt-[50px] pb-12">
      <Carousel
        prevIcon={
          <span
            className="carousel-control-prev-icon rounded-full border-2 border-white bg-black bg-opacity-50 w-10 h-10 flex items-center justify-center"
            aria-hidden="true"
          />
        }
        nextIcon={
          <span
            className="carousel-control-next-icon rounded-full border-2 border-white bg-black bg-opacity-50 w-10 h-10 flex items-center justify-center"
            aria-hidden="true"
          />
        }
        indicators={true}
        
      >
        <Carousel.Item>
          <img className="d-block w-100 " src={hero1} alt="First slide" />
          <Carousel.Caption className="flex flex-col items-center justify-center h-full">
            <h3 className="text-lg md:text-2xl lg:text-4xl mb-4 md:mb-4 lg:mb-6 font-semibold leading-snug md:leading-normal text-center">
              Explore Our Wide Range of Products
            </h3>
            <p className="mb-4 md:mb-4 lg:mb-6 text-center">
              Discover a diverse selection of high-quality seeds and plants
              <br className="hidden md:block" />
              that promise excellent yield and resilience
            </p>
            <Link to='/product' className="btn btn-success flex items-center justify-center text-black mx-auto">
              Shop Now
              <img
                src={shop}
                alt="Shop icon"
                className="ml-2 w-4 h-4 md:w-5 md:h-5"
              />
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hero2} alt="Second slide" />
          <Carousel.Caption className="flex flex-col items-center justify-center h-full">
            <h3 className="text-lg md:text-2xl lg:text-4xl mb-4 md:mb-4 lg:mb-6 font-semibold leading-snug md:leading-normal text-center">
              Explore Our Wide Range of Products
            </h3>
            <p className="mb-4 md:mb-4 lg:mb-6 text-center">
              Discover a diverse selection of high-quality seeds and plants
              <br className="hidden md:block" />
              that promise excellent yield and resilience
            </p>
            <button className="btn btn-success flex items-center justify-center text-black mx-auto">
              Shop Now
              <img
                src={shop}
                alt="Shop icon"
                className="ml-2 w-4 h-4 md:w-5 md:h-5"
              />
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hero3} alt="Third slide" />
          <Carousel.Caption className="flex flex-col items-center justify-center h-full">
            <h3 className="text-lg md:text-2xl lg:text-4xl mb-4 md:mb-4 lg:mb-6 font-semibold leading-snug md:leading-normal text-center">
              Explore Our Wide Range of Products
            </h3>
            <p className="mb-4 md:mb-4 lg:mb-6 text-center">
              Discover a diverse selection of high-quality seeds and plants
              <br className="hidden md:block" />
              that promise excellent yield and resilience
            </p>
            <button className="btn btn-success flex items-center justify-center text-black mx-auto">
              Shop Now
              <img
                src={shop}
                alt="Shop icon"
                className="ml-2 w-4 h-4 md:w-5 md:h-5"
              />
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hero4} alt="Fourth slide" />
          <Carousel.Caption className="flex flex-col items-center justify-center h-full">
            <h3 className="text-lg md:text-2xl lg:text-4xl mb-4 md:mb-4 lg:mb-6 font-semibold leading-snug md:leading-normal text-center">
              Explore Our Wide Range of Products
            </h3>
            <p className="mb-4 md:mb-4 lg:mb-6 text-center">
              Discover a diverse selection of high-quality seeds and plants
              <br className="hidden md:block" />
              that promise excellent yield and resilience
            </p>
            <button className="btn btn-success flex items-center justify-center text-black mx-auto">
              Shop Now
              <img
                src={shop}
                alt="Shop icon"
                className="ml-2 w-4 h-4 md:w-5 md:h-5"
              />
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
