import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Route, Routes } from "react-router-dom";
import CustomerReview from "../components/CustomerReview";
import ProductDescription from "../components/ProductDescription";
import ProductDetailsNav from "../components/ProductDetailsNav";
import ProductWarranty from "../components/ProductWarranty";

function ProductDetails() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="pb-20 w-full overflow-x-none scroll-smooth">
        <div className="flex flex-col md:flex-row gap-4 font- w-4/5 mx-auto mt-6 mb-14">
          <div className="hidden md:flex flex-col gap-4">
            <img src="/orange.png" alt="orange product image" />
            <img src="/grape.png" alt="grape product image" />
            <img src="/zucchinni.png" alt="zucchinni product image" />
            <img src="/tomato.png" alt="tomato product image" />
          </div>
          <div>
            <img src="/bigorange.png" alt="main product image" />
          </div>
          <div className="text-[#343434] ml-4">
            <h5 className="font-semibold pb-8 text-xs">
              <span className="text-[#4BAF47]">Sold by: </span>Three Ace
              Technology Services Ltd
            </h5>
            <div>
              <h3 className="font-semibold text-xl">Fresh Orange</h3>
              <div className="flex gap-[6px] my-6">
                <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
                <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
                <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
                <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
                <i className="bx bx-sm text-[#4BAF47] bx-star"></i>
                <p className="font-normal text-base">12 Reviews</p>
              </div>
              <p className="font-semibold text-2xl">₦2500.00</p>
            </div>
            <div className="my-8">
              <p className="font-medium text-base pb-5">Quantity</p>
              <div className="flex gap-3">
                <button onClick={decrement} className="text-2xl">
                  <i className="bx bx-md text-[#4BAF47] hover:text-[#61d85d] bxs-minus-circle"></i>
                </button>
                <p className="text-xl text-center bg-[#F8F8F8] w-9 h-8 self-center rounded-[48px] text-[#343434]">
                  {count}
                </p>
                <button onClick={increment} className="text-2xl">
                  <i className="bx bx-md text-[#4BAF47] hover:text-[#61d85d] bxs-plus-circle"></i>
                </button>
              </div>
            </div>
            <div className="flex gap-6">
              <button className="flex items-center gap-2 bg-[#4BAF47] hover:bg-[#5ad356] rounded-lg my-2 py-2 px-2 lg:px-3 font-bold">
                <p className=" text-base">Add to Cart</p>
                <i className="bx bx-sm bx-cart-alt"></i>
              </button>
              <i className="bx bx-md text-[#4BAF47] bx-heart self-center"></i>
            </div>
            <div className="mt-6">
              <p>Share With Friends</p>
              <div className="flex gap-4 my-3">
                <i className="bx bx-sm p-1 bxl-facebook rounded-full bg-[#F8F8F8]"></i>
                <i className="bx bx-sm p-1 bxl-instagram rounded-full bg-[#F8F8F8]"></i>
                <div className="rounded-[48px] p-2 self-center bg-[#F8F8F8]">
                  <FaXTwitter />
                </div>
                <i className="bx bx-sm p-1 bxl-whatsapp rounded-full bg-[#F8F8F8]"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/5 mx-auto my-8">
          <ProductDetailsNav />
          <Routes>
            <Route index element={<ProductDescription />} />
            <Route path="/description" element={<ProductDescription />} />
            <Route path="/customer-review" element={<CustomerReview />} />
            <Route path="/warranty" element={<ProductWarranty />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
