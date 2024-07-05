import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
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
          <Popover.Panel className="absolute left-0 top-0 gap-2">
            <div className=" w-[250px] h-screen bg-white font-normal flex flex-col py-[12px] cursor-pointer drop-shadow-sm">
              <div className="flex gap-3 pb-5">
                <i
                  className="bx bx-x bx-md hover:text-[#4BAF47] text-[#c4c4c4] px-2"
                  onClick={() => setIsOpen(false)}
                ></i>
                <img src="/logo.png" alt="Bayasel Logo" />
              </div>
              <button
                className="flex items-center hover:text-[#4BAF47] gap-2 border-b border-gray px-6 py-1 mb-3"
                onClick={() => setIsOpen(false)}
              >
                <i className="bx bx-shopping-bag"></i>
                <p>Orders</p>
              </button>
              <button
                className="flex items-center hover:text-[#4BAF47] gap-2 border-b border-gray px-6 py-1 mb-3"
                onClick={() => setIsOpen(false)}
              >
                <i className="bx bx-heart"></i>
                <p>Saved Items</p>
              </button>
              <button
                className="flex items-center hover:text-[#4BAF47] gap-2 border-b border-gray px-6 py-1 mb-3"
                onClick={() => setIsOpen(false)}
              >
                <i className="bx bx-sm bx-help-circle"></i>
                <p>Help</p>
              </button>
              <Link
                to="/cart"
                className="flex items-center gap-2 hover:text-[#4BAF47] border-b border-gray px-6 py-1 mb-3"
                onClick={() => setIsOpen(false)}
              >
                <i className="bx bx-sm bx-cart-alt"></i>
                <p>Cart</p>
              </Link>
              <button className="bg-[#4BAF47] hover:bg-[#5ad356] rounded-lg text-[#343434] font-semibold px-5 py-3 mx-6 my-6">
                Be a Vendor
              </button>

              <button
                className=" py-1 mt-6 hover:text-[#4BAF47]"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </button>
              <div className="flex gap-4 my-4 justify-center items-center">
                <i className="bx bx-sm p-1 bxl-facebook rounded-full bg-[#F8F8F8] border border-gray-50 text-[#4BAF47]"></i>
                <i className="bx bx-sm p-1 bxl-instagram rounded-full bg-[#F8F8F8] border border-gray-50 text-[#4BAF47]"></i>
                <div className="rounded-full bg-[#F8F8F8] border border-gray-50 text-[#4BAF47] p-[10px]">
                  <FaXTwitter />
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default Menu;
