import  { useState } from "react";
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
    setCount((c) => (c === 0 ? 0 : c - 1));
  };

  return (
    <>
      <div className="pb-20 w-full overflow-x-none scroll-smooth bg-[#ffffff]">
        <div className="flex flex-col md:flex-row gap-4 font-poppins w-11/12 lg:w-4/5 mx-auto mt-6 mb-14">
          <div className="flex md:hidden justify-between my-3">
            <h3 className="font-semibold text-lg">Fresh Orange</h3>
            <p className="font-semibold text-lg">₦2500.00</p>
          </div>

          <div className="md:hidden flex gap-[6px]">
            <i className="bx text-[#4BAF47] bxs-star"></i>
            <i className="bx text-[#4BAF47] bxs-star"></i>
            <i className="bx text-[#4BAF47] bxs-star"></i>
            <i className="bx text-[#4BAF47] bxs-star"></i>
            <i className="bx text-[#4BAF47] bx-star"></i>
            <p className="font-normal text-sm pl-6">12 Reviews</p>
          </div>

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
            <h5 className="font-semibold pb-2 lg:pb-8 text-xs">
              <span className="text-[#4BAF47]">Sold by: </span>Three Ace
              Technology Services Ltd
            </h5>
            <div>
              <h3 className="hidden lg:block font-semibold text-xl">
                Fresh Orange
              </h3>
              <div className="hidden md:flex gap-[6px] my-6">
                <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
                <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
                <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
                <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
                <i className="bx bx-sm text-[#4BAF47] bx-star"></i>
                <p className="font-normal text-base">12 Reviews</p>
              </div>
              <p className="hidden md:block font-semibold text-2xl">₦2500.00</p>
            </div>
            <div className=" my-3 lg:my-8">
              <p className="font-medium text-lg lg:text-base pb-5">Quantity</p>
              <div className="flex gap-3">
                <button onClick={decrement} className="text-lg lg:text-2xl">
                  <i className="bx bx-md text-[#4BAF47] hover:text-[#61d85d] bxs-minus-circle"></i>
                </button>
                <p className="text-xl text-center bg-[#F8F8F8] w-9 h-8 self-center rounded-[48px] text-[#343434]">
                  {count}
                </p>
                <button onClick={increment} className="text-lg lg:text-2xl">
                  <i className="bx bx-md text-[#4BAF47] hover:text-[#61d85d] bxs-plus-circle"></i>
                </button>
              </div>
            </div>
            <div className="flex gap-6 my-2 lg:my-0">
              <button className="flex items-center gap-2 bg-[#4BAF47] hover:bg-[#5ad356] rounded-lg my-2 py-2 px-2 lg:px-3 font-semibold lg:font-bold">
                <p className="text-base">Add to Cart</p>
                <i className="bx bx-sm bx-cart-alt"></i>
              </button>
              <i className="bx bx-sm lg:bx-md text-[#4BAF47] bx-heart self-center cursor-pointer"></i>
            </div>
            <div className="mt-6 flex gap-7 md:block">
              <p className="text-sm lg:text-base">Share With Friends</p>
              <div className="flex lg:hidden gap-2 lg:gap-4 cursor-pointer">
                <i className="bx bx-xs p-0.5 bxl-facebook rounded-full bg-[#F8F8F8]"></i>
                <i className="bx bx-xs p-0.5 bxl-instagram rounded-full bg-[#F8F8F8]"></i>
                <div className="rounded-[48px] p-0.5 self-center bg-[#F8F8F8]">
                  <FaXTwitter />
                </div>
                <i className="bx bx-xs p-0.5 bxl-whatsapp rounded-full bg-[#F8F8F8]"></i>
              </div>
              <div className="hidden lg:flex gap-2 lg:gap-4 my-3 cursor-pointer">
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
          <div>
            <Routes>
              <Route path="description" element={<ProductDescription />} />
              <Route path="customer-review" element={<CustomerReview showWriteReview={true}/>} />
              <Route path="warranty" element={<ProductWarranty />} />

              <Route index element={<ProductDescription />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
