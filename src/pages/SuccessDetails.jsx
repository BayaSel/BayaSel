import orange from '../assets/cart/orange.png';

const SuccessDetails = () => {
  const email = 'chibuzoezeh@yahoo.com'; // Email address to display

  const receiptTransaction = [
    { title: 'Transaction Date', value: '22-02-2024' },
    { title: 'Transaction ID', value: '9876543210CSRCS' },
    { title: 'Estimated Arrival Date', value: '01-03-2024' },
  ];

  const receiptAmount = [
    { title: 'Subtotal', value: '$1,300.00' },
    { title: 'Delivery Fee', value: '$10.00' },
    { title: 'Discount', value: '-$5.00' },
    { title: 'Grand Total', value: '$1,305.00', isBold: true }, // Added isBold flag
  ];

  return (
    <div className='mt-24 mb-20 mx-auto w-full max-w-3xl px-4'>
      <h4 className='text-center font-semibold text-xl leading-10'>
        Thanks for your order!
      </h4>
      <p className='text-center'>
        Your order confirmation and receipt has been sent to {email}
      </p>
      <div className='shadow-lg mt-10 p-4 bg-[#FFFFFF]'>
        <h4 className='text-center font-semibold text-xl mb-6'>Order Receipt</h4>
        {receiptTransaction.map((item, index) => (
          <div key={index} className='flex justify-between leading-10'>
            <p>{item.title}</p>
            <p>{item.value}</p>
          </div>
        ))}
        <div className='flex justify-between items-center border-t-2 border-b-2 py-4'>
          <div className='flex items-center gap-4'>
            <img src={orange} alt='Product' className='w-16 h-16 object-cover' />
            <div>
              <p className='text-[#C4C4C4]'>BINATONE</p>
              <p className='font-semibold'>Rice Master Rice Cooker</p>
            </div>
          </div>
          <p className='text-[#C4C4C4]'>$250.00</p>
        </div>
        {receiptAmount.map((item, index) => (
          <div
            key={index} // Adding a unique key based on the index
            className={`flex justify-between leading-10 ${
              item.isBold ? 'font-semibold' : ''
            }`}
          >
            <p>{item.title}</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <button className='w-full max-w-[512px] h-[48px] bg-[#4BAF47] hover:bg-[#5ad356] rounded-lg text-white font-normal mt-16'>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default SuccessDetails;
