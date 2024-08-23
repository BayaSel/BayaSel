//import React from 'react'
import { Link } from "react-router-dom";
import { GoPeople } from "react-icons/go";
import { GoMegaphone } from "react-icons/go";
import { GrUserAdmin } from "react-icons/gr";

export default function AdminSideNav() {
  return (
    <div className="bg-[#FFFFFF] flex flex-col w-[320px] space-y-3">
      <div className="px-4">
        <img src="/adminlogo.png" alt="Bayasel Logo"/>
      </div>
      
      <nav>
        <Link className="flex gap-2.5 py-3 px-3 rounded-lg hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2 w-fit">
         <i className='bx bx-sm bx-category-alt bx-rotate-90' ></i>
          Overview
          </Link>
        <Link className="flex gap-2.5 py-3 px-3 rounded-lg w-fit hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2">
          <i className='bx bx-sm bx-purchase-tag bx-rotate-90' ></i>
          Product</Link>
        <Link className="flex gap-2.5 py-3 px-3 rounded-lg w-fit hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2">
          <i className='bx bx-sm bx-cart'></i>Order</Link>
        <Link className="flex gap-2.5 py-3 px-3 rounded-lg w-fit hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2">
          <GoPeople />
        Customer</Link>
        <Link className="flex gap-2.5 py-3 px-3 rounded-lg w-fit hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2"> <i className='bx bx-sm bx-line-chart'></i>Analytics and Report</Link>
        <Link className="flex gap-2.5 py-3 px-3 rounded-lg w-fit hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2"><GoMegaphone /> Promotions</Link>
        <Link className="flex gap-2.5 py-3 px-3 rounded-lg w-fit hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2"><GrUserAdmin />Sub-admin</Link>
        <Link className="flex gap-2.5 py-3 px-3 rounded-lg w-fit hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2"><i className='bx bx-sm bx-folder-plus'></i>Content management</Link>
        <Link className="flex gap-2.5 py-3 px-3 rounded-lg w-fit hover:bg-[#608866] hover:text-[#FFFFFF] font-semibold text-xl mx-2"><i className='bx bx-sm bx-cog'></i>Settings</Link>
      </nav>
    </div>
  )
}
