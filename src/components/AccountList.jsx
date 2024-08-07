// import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function AccountList() {
  return (
    <div>
      <Popover>
        <Popover.Button className="z-popover focus:outline-none flex text-sm gap-1 hover:text-[#4BAF47]">
          <i className="bx bx-sm bx-user"></i>
          <p className="hidden lg:block font-semibold pt-0.5">Account</p>
          <i className="bx bx-sm bx-chevron-down hidden lg:block"></i>
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="z-10 absolute right-3 lg:right-auto mt-2">
            <div className="w-[120px] lg:w-[160px] bg-white text-[#343434] font-semibold font-poppins text-xs lg:text-sm flex flex-col justify-center drop-shadow rounded-md absolute">
              <button className="bg-[#4BAF47] hover:bg-[#5ad356] rounded-lg mx-3 my-2 py-2 px-2 lg:px-4">
                <Link to='/register'>Sign in</Link>
              </button>
              <Link to='/account' className="flex items-center gap-3 hover:bg-[#F8F8F8] px-3 py-1 lg:py-2">
                <i className="bx bx-user"></i>
                <p>Account</p>
              </Link>
              <button className="flex items-center gap-3 hover:bg-[#F8F8F8] px-3 py-1 lg:py-2">
                <i className="bx bx-shopping-bag"></i>
                <p>Orders</p>
              </button>
              <button className="flex items-center gap-3 hover:bg-[#F8F8F8] px-3 py-1 lg:py-2">
                <i className="bx bx-heart"></i>
                <p>Saved Items</p>
              </button>
              <button className="flex items-center gap-3 hover:bg-[#F8F8F8] px-3 py-1 lg:py-2">
              <i className='bx bx-globe'></i>
                <p>Tracking</p>
              </button>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default AccountList;
