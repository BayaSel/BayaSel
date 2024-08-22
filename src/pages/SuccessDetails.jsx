import React from 'react';
import orange from '../assets/cart/orange.png';

const SuccessDetails = () => {
  const receiptTransaction = [
    { title: 'Transaction Date', value: '22-02-2024' },
    { title: 'Transaction ID', value: '9876543210CSRCS' },
    { title: 'Estimated Arrival Date', value: '01-03-2024' },
  ];

  const receiptAmount = [
    { title: 'Subtotal', value: '$1,300.00' },
    { title: 'Delivery Fee', value: '$10.00' },
    { title: 'Discount', value: '-$5.00' },
    { title: 'Grand Total', value: '$1,305.00' },
  ];
  return (
    <div className='mt-24 mb-20 ml-auto mr-auto w-1/2 '>
      <h4 className='text-center font-semibold text-xl leading-10'>
        Thanks for your order!
      </h4>
      <p className='text-center'>
        Your order confirmation and receipt has been sent to
        chibuzoezeh@yahoo.com
      </p>
      <div className='shadow-lg mt-10'>
        <h4 className='text-center font-semibold text-xl'>Order Receipt</h4>
        {receiptTransaction.map((item) => {
          return (
            <div className='flex justify-between leading-10'>
              <p>{item.title}</p>
              <p>{item.value}</p>
            </div>
          );
        })}
        <div className='flex justify-between items-center border-t-2 border-b-2                                    '>
          <div className='flex justify-between items-center gap-4'>
            <img src={orange} alt='' />
            <div>
              <p className='text-[#C4C4C4]'>BINATONE</p>
              <p className=' font-semibold '>Rice Master Rice Cooker</p>
            </div>
          </div>
          <p className='text-[#C4C4C4]'>$250.00</p>
        </div>
        {receiptAmount.map((item) => {
          return (
            <div className='flex justify-between leading-10'>
              <p>{item.title}</p>
              <p>{item.value}</p>
            </div>
          );
        })}
      </div>
      <div className='flex justify-center'>
        <button className='w-[512px] h-[48px] bg-[#4BAF47] hover:bg-[#5ad356] rounded-lg text-[#ffffff] font-normal mt-16'>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default SuccessDetails;
