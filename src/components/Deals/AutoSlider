import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const products = [
  {
    id: 1,
    name: "FREELAND - IJEBU GARI - 5kg",
    image: "../garri-ijebu.png",
    amount: "$850.00",
    originalAmount: "$900.00",
    rating: 5,
    itemsleft: "15 items left",
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://via.placeholder.com/150",
    amount: "$200",
    originalAmount: "$250",
    rating: 4,
    itemsleft: "15 items left",
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://via.placeholder.com/150",
    amount: "$150",
    originalAmount: "$180",
    rating: 3,
    itemsleft: "15 items left",
  },
  {
    id: 4,
    name: "Product 4",
    image: "https://via.placeholder.com/150",
    amount: "$250",
    originalAmount: "$300",
    rating: 4,
    itemsleft: "15 items left",
  },
];

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const { name, image, amount, originalAmount, rating, itemsleft } =
    products[currentIndex];

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <div className="relative flex bg-white shadow-lg rounded-lg overflow-hidden w-full mb-8">
    <div className="py-[155px] ml-10">
        <IoIosArrowBack
          className="text-black w-[60px] h-[60px] border-2 rounded-full active:bg-white active:text-black 
                hover:bg-green hover:text-black"
          onClick={handleNext}
        />
      </div>
      <img src={image} alt={name} className="w-1/4 m-5 h-1/4" />
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-xl text-green-600 mb-1">{amount}</p>
        <p className="text-sm text-gray-500 line-through mb-4">
          {originalAmount}
        </p>
        <div className="flex items-center mb-4">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <FaStar key={i} className="text-green-500" />
            ))}
        </div>
        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Add to Cart <FaShoppingCart className="mr-2" />
        </button>
        <p className="text-sm text-black-100 mb-5 mt-5">{itemsleft}</p>
        <img src="../reviewed.png" alt={name} className="w-1/4" />
      </div>

      <div className="py-[155px]">
        <IoIosArrowForward
          className="text-black w-[60px] h-[60px] border-2 rounded-full active:bg-white active:text-black 
                hover:bg-green hover:text-black"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default AutoSlider;
