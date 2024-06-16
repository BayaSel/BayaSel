import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

function AccountList() {
  return (
    <div>
      <Popover>
        <Popover.Button className="relative focus:outline-none flex gap-1 hover:text-[#4BAF47]">
          <i className="bx bx-sm bx-user"></i>
          <p className="hidden lg:block font-semibold">Account</p>
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
            <div className="w-[120px] lg:w-[160px] bg-white text-[#343434] font-semibold font-poppins text-xs lg:text-base flex flex-col justify-center drop-shadow rounded-md">
              <button className="bg-[#4BAF47] hover:bg-[#5ad356] rounded-lg mx-3 my-2 py-2 px-2 lg:px-4">
                Sign in
              </button>
              <button className="flex items-center gap-2 hover:bg-[#F8F8F8] px-3 py-1 lg:py-2">
                <i className="bx bx-user"></i>
                <p>Account</p>
              </button>
              <button className="flex items-center gap-2 hover:bg-[#F8F8F8] px-3 py-1 lg:py-2">
                <i className="bx bx-shopping-bag"></i>
                <p>Orders</p>
              </button>
              <button className="flex items-center gap-2 hover:bg-[#F8F8F8] px-3 py-1 lg:py-2">
                <i className="bx bx-heart"></i>
                <p>Saved Items</p>
              </button>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default AccountList;
