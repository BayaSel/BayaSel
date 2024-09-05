import orange from '../assets/cart/orange.png';

const SuccessDetails = () => {
  const email = 'chibuzoezeh@yahoo.com';

  const receiptTransaction = [
    { title: 'Transaction Date', value: '22-02-2024' },
    { title: 'Transaction ID', value: '9876543210CSRCS' },
    { title: 'Estimated Arrival Date', value: '01-03-2024' },
  ];

  const receiptAmount = [
    { title: 'Subtotal', value: '$1,300.00' },
    { title: 'Delivery Fee', value: '$10.00' },
    { title: 'Discount', value: '-$5.00' },
    { title: 'Grand Total', value: '$1,305.00', isGrandTotal: true },
  ];

  return (
    <div className='md:mt-24 mt-10 mb-8 md:mb-20 md:mx-auto w-full max-w-3xl md:px-4 text-[#343434]'>
      <h4 className='text-center font-semibold text-xl leading-10 text-[#343434]'>
        Thanks for your order!
      </h4>
      <p className='text-center text-xs'>
        Your order confirmation and receipt has been sent to {email}
      </p>
      <div className='md:shadow-lg mt-10 md:p-4 bg-[#FFFFFF]'>
        <h4 className='text-center font-semibold text-xl mb-6 text-[#343434]'>Order Receipt</h4>
        {receiptTransaction.map((item, index) => (
          <div key={index} className='flex justify-between md:px-0 px-5 leading-10'>
            <p>{item.title}</p>
            <p>{item.value}</p>
          </div>
        ))}

        <div className="py-10">
          <h4 className="text-center md:hidden font-semibold text-xl text-[#343434]">Your Order</h4>
          <div className="md:flex justify-between items-center md:border-t md:border-b py-4">
            <div className="flex items-center gap-4 px-5 md:px-0">
              <img src={orange} alt="Product" className="md:w-16 md:h-16 object-cover" />
              <div className=''>
                <p className="text-[#C4C4C4] hidden md:block">BINATONE</p>
                <p className="font-semibold hidden md:block">Rice Master Rice Cooker</p>
                <p className="font-semibold md:hidden block">Fresh Orange</p>
                <p className="md:hidden block font-semibold py-3">$250.00</p>
              </div>
            </div>
            <p className="md:text-[#C4C4C4] hidden md:block">$250.00</p>
          </div>
          <div className="md:border-none border rounded-2xl w-full md:px-0 py-2 px-3">
            <hr className="my-4" />
            {receiptAmount.map((item, index) => (
               <div
               key={index}
               className={`flex justify-between md:px-0 px-3 py-3 leading-10 ${
                 item.isGrandTotal ? 'md:font-semibold' : 'md:font-normal'
               } ${
                 'font-semibold md:font-normal'
               }`}
             >
                <p>{item.title}</p>
                <p>{item.value}</p>
              </div>
            ))}  
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <button className='w-full m-8 md:m-0 max-w-[512px] h-[48px] bg-[#4BAF47] hover:bg-[#5ad356] rounded-lg text-white font-normal md:mt-10'>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default SuccessDetails;
