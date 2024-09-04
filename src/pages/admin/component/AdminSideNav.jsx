import { useState } from 'react';
import { Link } from "react-router-dom";
import { GoPeople, GoMegaphone } from "react-icons/go";
import { GrUserAdmin } from "react-icons/gr";

// eslint-disable-next-line react/prop-types
export default function AdminSideNav({ onLinkClick }) {
  const [activeLink, setActiveLink] = useState('overview');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    onLinkClick && onLinkClick(); 
  };

  return (
    <div className="bg-[#FFFFFF] flex flex-col w-[320px] space-y-3">
      <div className="px-4">
        <img src="/adminlogo.png" alt="Bayasel Logo"/>
      </div>
      
      <nav>
        <Link 
          to='overview' 
          onClick={() => handleLinkClick('overview')} 
          className={`flex gap-2.5 py-3 px-3 rounded-lg font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'overview' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <i className='bx bx-sm bx-category-alt bx-rotate-90' ></i> Overview
        </Link>
        
        <Link 
          to='admin-product' 
          onClick={() => handleLinkClick('admin-product')} 
          className={`flex gap-2.5 py-3 px-3 rounded-lg font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'admin-product' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <i className='bx bx-sm bx-purchase-tag bx-rotate-90' ></i> Product
        </Link>
        
        <Link 
          to='admin-order' 
          onClick={() => handleLinkClick('admin-order')} 
          className={`flex gap-2.5 py-3 px-3 rounded-lg font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'admin-order' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <i className='bx bx-sm bx-cart'></i> Order
        </Link>
        
        <Link 
          to='admin-customer' 
          onClick={() => handleLinkClick('admin-customer')} 
          className={`flex gap-2.5 py-3 px-3 rounded-lg font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'admin-customer' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <GoPeople /> Customer
        </Link>
        
        <Link 
          to='analytics' 
          onClick={() => handleLinkClick('analytics')} 
          className={`flex gap-2.5 py-3 px-3 rounded-lg font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'analytics' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <i className='bx bx-sm bx-line-chart'></i> Analytics and Report
        </Link>
        
        <Link 
          to='promotions' 
          onClick={() => handleLinkClick('promotions')} 
          className={`flex gap-2.5 py-3 px-3 rounded-lg font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'promotions' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <GoMegaphone /> Promotions
        </Link>
        
        <Link 
          to='sub-admin' 
          onClick={() => handleLinkClick('sub-admin')} 
          className={`flex gap-2.5 py-3 px-3 rounded-lg font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'sub-admin' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <GrUserAdmin /> Sub-admin
        </Link>
        
        <Link 
          to='content-manage' 
          onClick={() => handleLinkClick('content-manage')} 
          className={`flex gap-2.5 py-3 px-3 rounded-lg font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'content-manage' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <i className='bx bx-sm bx-folder-plus'></i> Content management
        </Link>
        
        <Link 
          to='admin-settings' 
          onClick={() => handleLinkClick('admin-settings')} 
          className={`flex gap-2.5 py-3 px-3 rounded-lg font-semibold text-xl mx-2 transition duration-300 ease-in-out transform hover:scale-105 w-fit ${
            activeLink === 'admin-settings' ? 'bg-[#608866] text-[#FFFFFF]' : 'hover:bg-[#608866] hover:text-[#FFFFFF]'
          }`}
        >
          <i className='bx bx-sm bx-cog'></i> Settings
        </Link>
      </nav>
    </div>
  );
}
