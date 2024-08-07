//import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import AccountList from "./AccountList";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Header() {
  return (
    <>
      <div className="bg-white top-0 sticky drop-shadow-sm w-screen overscroll-x-none pb-1">
        <header className="text-[#343434] font-normal hidden lg:flex justify-between text-base pt-12 font-poppins w-4/5 mx-auto">
          <div className="flex gap-2">
            <i className="bx bx-sm  p-1 bxl-facebook rounded-full bg-[#F8F8F8]"></i>
            <i className="bx bx-sm p-1 bxl-instagram rounded-full bg-[#F8F8F8]"></i>
            <div className="rounded-[45px] p-2 bg-[#F8F8F8]">
              <FaXTwitter />
            </div>
          </div>
          <p>
            Discover top-quality seeds, tools, and supplies for a bountiful
            harvest.
          </p>
          <div className="flex">
            <i className="bx bx-sm bx-phone-call pr-2"></i>
            <p>+1 (850) 344 0 66</p>
          </div>
        </header>
        <nav className="flex justify-between lg:justify-around items-center mb-0 lg:mb-5 w-11/12 lg:w-5/6 mx-auto">
          <div className="flex items-center">
            <Menu />
            <img src="/logo.png" alt="Bayasel Logo" className="mb-2 lg:mb-0" />
          </div>

          {/* Search Field */}
          <div className="hidden md:flex relative text-[#343434]">
            <input
              type="text"
              placeholder="Search for your product here"
              className="relative pl-6 lg:pl-12 pr-3 py-2 w-[500px] bg-white rounded-md border border-[#C4C4C4] focus:outline-none focus:border-green-600 text-[8px] md:text-xs lg:text-base"
            />
            <button className="absolute inset-y-3 left-0 items-center pl-1 lg:pl-4 z-2 cursor-pointer ">
              <i className="bx bx-search bx-sm text-gray-400 hover:text-black"></i>
            </button>
          </div>

          {/* other nav items */}
          <div className="flex gap-1 pl-2">
            <div className="flex gap-3 items-center text-sm font-semibold ">
              <button className="hidden lg:flex gap-2 hover:text-[#4BAF47]">
                <i className="bx bx-sm bx-help-circle"></i>
                <p>Help</p>
              </button>
              <AccountList />
              <Link to="/cart" className="flex gap-2 hover:text-[#4BAF47]">
                <i className="bx bx-sm bx-cart-alt"></i>
                <p className="hidden lg:block">Cart</p>
              </Link>
              <button className="hidden lg:block lg:w-[120px] ml-5 bg-[#4BAF47] hover:bg-[#5ad356] rounded-lg text-[#343434] font-semibold px-4 py-2">
                Be a Vendor
              </button>
            </div>
          </div>
        </nav>

        <div className="md:hidden text-[#343434] w-11/12 mx-auto mb-1">
          <input
            type="text"
            placeholder="Search for your product here"
            className="pl-6 pr-3 py-2 w-11/12 bg-white rounded-md border border-[#C4C4C4] focus:outline-none focus:border-green-600 text-[10px]"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
