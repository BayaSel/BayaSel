import React from "react";
import { Link, Outlet } from "react-router-dom";

function ProductDetailsNav() {
  return (
    <div className="font-poppins text-sm lg:text-base text-[#343434] flex gap-8 lg:gap-12 my-8">
      <Link
        to="description"
        className="hover:text-[#4BAF47] focus:outline-none focus:text-[#4BAF47] active:text-[#42a73f]"
      >
        Description
      </Link>
      <Link
        to="customer-review"
        className="hover:text-[#4BAF47] focus:outline-none focus:text-[#4BAF47] active:text-[#42a73f]"
      >
        Customer Reviews (2)
      </Link>
      <Link
        to="warranty"
        className="hover:text-[#4BAF47] focus:outline-none focus:text-[#4BAF47] active:text-[#42a73f]"
      >
        Warranty
      </Link>

      <Outlet />
    </div>
  );
}

export default ProductDetailsNav;
