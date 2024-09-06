import PropTypes from 'prop-types';
//import { useState } from 'react';


export default function AdminOrderDetails({ order, onBackClick }) {
  
  
  return (
    <div className="poppins">
      <div className="flex justify-between mb-4 font-semibold">
        <h1 className="text-[#555657] text-2xl leading-[48px]">ORDER PAGE</h1>
        <button onClick={onBackClick} className='text-xl pb-3'><i className='bx bx-arrow-back pr-2 transform hover:scale-105'></i>Back</button>
      </div>
      <div className="flex gap-2">
        <img src="/biggerbeans.png" alt="Beans image" className='h-[300px] w-[400px]'/>
        <div className="text-[#343434] ml-4">
          <h5 className="font-semibold pb-2 lg:pb-8 text-xs">
            <span className="text-[#4BAF47]">Sold by: </span>{order.vendor}
          </h5>
          <h3 className="hidden lg:block font-semibold text-xl">
            Oloyin Beans
          </h3>
          <div className="hidden md:flex gap-[6px] my-6">
            <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
            <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
            <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
            <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
            <i className="bx bx-sm text-[#4BAF47] bx-star"></i>
            <p className="font-normal text-base">12 Reviews</p>
          </div>
          <p className="hidden md:block font-semibold text-2xl">{order.price}</p>
          <div className="flex gap-1.5 py-4">
            <button className='text-white bg-Green rounded p-[7px] transition duration-300 ease-in-out transform hover:scale-105'>Accept</button>
            <button className='text-white bg-[#960200] rounded p-[7px] transition duration-300 ease-in-out transform hover:scale-105'>Deny</button>
          </div>
        </div>
      </div>
      
      {/* order details section */}
      <h1 className="text-[#555657] text-xl leading-[40px] mt-8">Order Details</h1>
      <section  className="p-3 w-[600px] text-[#555657] bg-white rounded-[10px] mt-2 space-y-3">
        <div className="flex justify-between">
          <p>Transaction Date</p>
          <p>{order.date}</p>
        </div>
        <div className="flex justify-between">
          <p>Order ID</p>
          <p>{order.orderNo}</p>
        </div>
        <div className="flex justify-between">
          <p>Estimated Arrival Date</p>
          <p>{order.date}</p>
        </div>
        <div className="flex justify-between font-semibold ">
          <p>{`Customer's Name`}</p>
          <p>{order.customerName}</p>
        </div>
        
        <div className="flex justify-between w-full divide-y divide-[#BABBBB]">
          <p>Subtotal</p>
          <p>{order.price}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>$10</p>
        </div>
        <div className="flex justify-between">
          <p>Discount</p>
          <p>$0</p>
        </div>
        <div className="flex justify-between font-semibold">
          <p>Grand Total</p>
          <p>{order.price}</p>
        </div>
      </section>
    </div>
  );
}

AdminOrderDetails.propTypes = {
  order: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    vendor: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    orderNo: PropTypes.string.isRequired
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
