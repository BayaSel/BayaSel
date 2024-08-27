//import React from 'react'
import { Link } from "react-router-dom";
import { GoPeople } from "react-icons/go";
import { GoMegaphone } from "react-icons/go";
import { GrUserAdmin } from "react-icons/gr";

// eslint-disable-next-line react/prop-types
export default function AdminSideNav({ onLinkClick }) {
  return (
    <div className="bg-[#FFFFFF] flex flex-col w-[320px] space-y-3">
      <div className="px-4">
        <img src="/adminlogo.png" alt="Bayasel Logo"/>
      </div>
      
      <nav>
        <Link to='overview' onClick={onLinkClick} className="flex gap-2.5 py-3 px-3 rounded-lg hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit">
         <i className='bx bx-sm bx-category-alt bx-rotate-90' ></i>
          Overview
          </Link>
        <Link to='admin-product' onClick={onLinkClick} className="flex gap-2.5 py-3 px-3 rounded-lg w-fit hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105">
          <i className='bx bx-sm bx-purchase-tag bx-rotate-90' ></i>
          Product</Link>
        <Link to='admin-order' onClick={onLinkClick} className="flex gap-2.5 py-3 px-3 rounded-lg w-fit hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105">
          <i className='bx bx-sm bx-cart'></i>Order</Link>
        <Link to='admin-customer' onClick={onLinkClick} className="flex gap-2.5 py-3 px-3 rounded-lg w-fit hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105">
          <GoPeople />
        Customer</Link>
        <Link to='analytics' onClick={onLinkClick} className="flex gap-2.5 py-3 px-3 rounded-lg w-fit hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105"> <i className='bx bx-sm bx-line-chart'></i>Analytics and Report</Link>
        <Link to='promotions' onClick={onLinkClick} className="flex gap-2.5 py-3 px-3 rounded-lg w-fit hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105"><GoMegaphone /> Promotions</Link>
        <Link to='sub-admin' onClick={onLinkClick} className="flex gap-2.5 py-3 px-3 rounded-lg w-fit hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105"><GrUserAdmin />Sub-admin</Link>
        <Link to='content-manage' onClick={onLinkClick} className="flex gap-2.5 py-3 px-3 rounded-lg w-fit hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105"><i className='bx bx-sm bx-folder-plus'></i>Content management</Link>
        <Link to='admin-settings' onClick={onLinkClick} className="flex gap-2.5 py-3 px-3 rounded-lg w-fit hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105"><i className='bx bx-sm bx-cog'></i>Settings</Link>
      </nav>
    </div>
  )
}
