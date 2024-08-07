import React, { useState, useEffect } from "react";
import stalion from "./images/stalion.png";
import beans from "./images/beans.png";
import brama from "./images/brama.png";
import guinea from "./images/guinea.png";
import "../Styles/home.css";

const sampleProducts = [
  {
    name: "GOLDEN STALION - LONG GRAIN...",
    rating: 5,
    reviews: [],
    price: 850.0,
    originalPrice: 950.0,
    image: stalion,
    link: "#",
  },
  {
    name: "BEANS - OLOYIN (honey) - 4 Ltrs...",
    rating: 5,
    reviews: [],
    price: 850.0,
    originalPrice: 950.0,
    image: beans,
    link: "#",
  },
  {
    name: "BRAMA - Piranhas - DOCTOR...",
    rating: 5,
    reviews: [],
    price: 850.0,
    originalPrice: 950.0,
    image: brama,
    link: "#",
  },
  {
    name: "GUINEA FOWL - size 2",
    rating: 5,
    reviews: [],
    price: 850.0,
    originalPrice: 950.0,
    image: guinea,
    link: "#",
  },
  {
    name: "GOLDEN STALION - LONG GRAIN...",
    rating: 5,
    reviews: [],
    price: 850.0,
    originalPrice: 950.0,
    image: stalion,
    link: "#",
  },
  {
    name: "BEANS - OLOYIN (honey) - 4 Ltrs...",
    rating: 5,
    reviews: [],
    price: 850.0,
    originalPrice: 950.0,
    image: beans,
    link: "#",
  },
  {
    name: "BRAMA - Piranhas - DOCTOR...",
    rating: 5,
    reviews: [],
    price: 850.0,
    originalPrice: 950.0,
    image: brama,
    link: "#",
  },
  {
    name: "GUINEA FOWL - size 2",
    rating: 5,
    reviews: [],
    price: 850.0,
    originalPrice: 950.0,
    image: guinea,
    link: "#",
  },
];

const ITEMS_PER_PAGE = 8;

const Latest = () => {
  const [products, setProducts] = useState(sampleProducts);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch real-time data and update state
    const fetchData = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchData();

    const intervalId = setInterval(fetchData, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const displayedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="latest-products container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Latest Products</h2>
        <a
          href="#"
          className="flex items-center text-green-600 py-1 px-3 rounded"
        >
          See All <span className="ml-1">&gt;</span>
        </a>
      </div>

      {/* Grid to display products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product, index) => (
          <div
            key={index}
            className="product-card border rounded flex flex-col items-start hover:shadow-lg transition-shadow w-full"
          >
            {/* Product image */}
            <img
              src={product.image}
              alt={product.name}
              className="product-image w-full mb-4 rounded"
            />

            {/* Product name */}
            <h3
              className="text-sm mb-2"
              style={{
                maxWidth: "100%",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {product.name}
            </h3>

            {/* Product rating and reviews */}
            <div className="flex items-center text-green-600 mb-2 text-sm text-left">
              <span className="mr-1">
                {"★".repeat(Math.round(product.rating))}
                {"☆".repeat(5 - Math.round(product.rating))}
              </span>
              <span className="text-gray-600">
                ({product.reviews.length} Reviews)
              </span>
            </div>

            {/* Product price */}
            <p className="text-left text-xl font-bold text-sm mb-1">
              ${product.price.toFixed(2)}
              <span className="original-price text-sm line-through text-gray-500 ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination-container flex justify-center items-center mt-4">
        <button
          onClick={handlePreviousPage}
          enabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <div className="pagination-numbers flex items-center mx-4">
          <div
            className={`pagination-number ${currentPage === 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </div>
          {currentPage > 2 && <span className="pagination-ellipsis">...</span>}
          {currentPage > 1 && currentPage < totalPages && (
            <div
              className="pagination-number active"
              onClick={() => setCurrentPage(currentPage)}
            >
              {currentPage}
            </div>
          )}
          {currentPage < totalPages - 1 && (
            <span className="pagination-ellipsis">...</span>
          )}
          {totalPages > 1 && (
            <div
              className={`pagination-number ${
                currentPage === totalPages ? "active" : ""
              }`}
              onClick={() => setCurrentPage(totalPages)}
            >
              {totalPages}
            </div>
          )}
        </div>
        <button
          onClick={handleNextPage}
          enabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Latest;
