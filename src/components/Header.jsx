import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import AccountList from "./AccountList";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-white top-0 drop-shadow-sm w-screen">
        <header className="text-[#343434] font-normal hidden lg:flex justify-between text-base pt-12 font-poppins w-4/5 mx-auto">
          <div className="flex gap-2">
            <i className="bx  p-1 bxl-facebook rounded-full bg-[#F8F8F8]"></i>
            <i className="bx  p-1 bxl-instagram rounded-full bg-[#F8F8F8]"></i>
            <div className="rounded-full p-1 bg-[#F8F8F8]">
              <FaXTwitter />
            </div>
          </div>
          <p>
            Discover top-quality seeds, tools, and supplies for a bountiful
            harvest.
          </p>
          <div className="flex">
            <i className="bx bx-phone-call"></i>
            <p>+1 (850) 344 0 66</p>
          </div>
        </header>
        <nav className="flex justify-between lg:justify-around items-center mb-5 w-11/12 lg:w-5/6 mx-auto">
          <img src="/logo.png" alt="Bayasel Logo" />

          {/* Search Field */}
          <div className="relative text-[#343434] ">
            <input
              type="text"
              placeholder="Search for your product here"
              className="relative pl-12 pr-3 py-2 w-[100%] md:w-[350px] lg:w-[18.7rem] bg-white rounded-md border border-[#C4C4C4] focus:outline-none focus:border-green-600 text-[10px] lg:text-base"
            />
            <div className="absolute inset-y-2 left-0 items-center pl-4 z-2">
              <i className="bx bx-search bx-sm text-gray-400"></i>
            </div>
          </div>

          {/* other nav items */}
          <div className="flex gap-2 lg:gap-3 pl-2">
            <div className="flex gap-5 items-center font-semibold ">
              <button className="hidden lg:flex gap-2">
                <i className="bx bx-sm bx-help-circle"></i>
                <p>Help</p>
              </button>
              <AccountList />
              <button className="hidden lg:flex gap-2">
                <i className="bx bx-sm bx-cart-alt"></i>
                <p>Cart</p>
              </button>
              <button className="hidden lg:block bg-[#4BAF47] hover:bg-[#5ad356] rounded-lg text-[#343434] font-semibold px-4 py-2">
                Be a Vendor
              </button>
            </div>

            {/* Mobile Nav */}
            <div className="lg:hidden">
              <Popover>
                <Popover.Button
                  className="relative focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <i className="bx bx-sm bx-menu text-[#4BAF47] hover:text-[#5ad356] cursor-pointer lg:hidden"></i>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  show={isOpen}
                  enter="transition ease-out duration-300 transform"
                  enterFrom="opacity-0 translate-y-2"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-200 transform"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-2"
                >
                  <Popover.Panel className="absolute left-0 top-0 flex gap-2">
                    <div className="w-[250px] h-screen bg-white font-normal flex flex-col py-[12px] cursor-pointer drop-shadow-sm">
                      <div className="flex justify-center items-center pt-8 pb-5">
                        <img
                          src="/logo.png"
                          alt="Bayasel Logo"
                          className="w-20 h-24"
                        />
                      </div>
                      <button
                        className="flex items-center gap-2 border-b border-gray px-6 py-1 mb-3"
                        onClick={() => setIsOpen(false)}
                      >
                        <i className="bx bx-sm bx-help-circle"></i>
                        <p>Help</p>
                      </button>
                      <button
                        className="flex items-center gap-2 border-b border-gray px-6 py-1 mb-3"
                        onClick={() => setIsOpen(false)}
                      >
                        <i className="bx bx-sm bx-cart-alt"></i>
                        <p>Cart</p>
                      </button>
                      <button className="bg-[#4BAF47] hover:bg-[#5ad356] rounded-lg text-[#343434] font-semibold px-5 py-3 mx-6 my-6">
                        Be a Vendor
                      </button>

                      <div className="flex gap-4 my-4 justify-center items-center">
                        <i className="bx bx-sm p-1 bxl-facebook rounded-full bg-[#F8F8F8] border border-gray-50 text-[#4BAF47]"></i>
                        <i className="bx bx-sm p-1 bxl-instagram rounded-full bg-[#F8F8F8] border border-gray-50 text-[#4BAF47]"></i>
                        <div className="rounded-full bg-[#F8F8F8] border border-gray-50 text-[#4BAF47] p-[10px]">
                          <FaXTwitter />
                        </div>
                      </div>
                      <p className="text-center px-6 py-1 mt-3">
                        Discover top-quality seeds, tools, and supplies for a
                        bountiful harvest.
                      </p>
                      <div className="flex justify-center items-center my-2">
                        <i className="bx bx-phone-call"></i>
                        <p>+1 (850) 344 0 66</p>
                      </div>
                    </div>
                    <i
                      className="bx bx-x bx-sm bg-[#4BAF47] hover:bg-[#5ad356] text-white my-3 mr-3 self-start rounded-md drop-shadow-sm"
                      onClick={() => setIsOpen(false)}
                    ></i>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
