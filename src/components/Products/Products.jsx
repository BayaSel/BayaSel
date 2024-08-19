import React from 'react'
import { FaChevronRight } from "react-icons/fa";

function Products() {

    const handleClick = () => {

    }

  return (
    <div>
        <div className='px-[100px] flex justify-between pb-[40px]'>
            <h4 className='text-[24px] font-semibold text-[#676767]'>Recommended Product</h4>
            <div className='flex gap-[6px] items-center'>
                <button 
                onClick={handleClick}
                className='text-[14px] text-[#4BAF47]'>See All</button>
                <span 
                onClick={handleClick}
                className='text-[16px] text-[#4BAF47]'><FaChevronRight/></span>
            </div>
        </div>
    </div>
  )
}

export default Products