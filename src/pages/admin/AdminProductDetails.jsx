import PropTypes from 'prop-types';

export default function AdminProductDetails({ product, onBackClick }) {
  return (
    <div className="poppins">
      <button onClick={onBackClick}><i className='bx bx-arrow-back pr-2'></i>Back</button>
      <h1 className="text-[#555657] font-semibold text-2xl leading-[48px] my-4">Product Details</h1>
      <div className="flex gap-2">
        <img src={product.imgSrc} alt="Beans product" className='h-[300px]'/>
        <div className="text-[#343434] ml-4">
          <h5 className="font-semibold pb-2 lg:pb-8 text-xs">
            <span className="text-[#4BAF47]">Sold by: </span>{product.vendor}
          </h5>
          <h3 className="hidden lg:block font-semibold text-xl">
            {product.name}
          </h3>
          <div className="hidden md:flex gap-[6px] my-6">
            <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
            <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
            <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
            <i className="bx bx-sm text-[#4BAF47] bxs-star"></i>
            <i className="bx bx-sm text-[#4BAF47] bx-star"></i>
            <p className="font-normal text-base">12 Reviews</p>
          </div>
          <p className="hidden md:block font-semibold text-2xl">{product.price}</p>
          <div className="flex gap-1.5 py-4">
            <button className='text-white bg-Green rounded p-[7px] transition duration-300 ease-in-out transform hover:scale-105'>Accept</button>
            <button className='text-white bg-[#960200] rounded p-[7px] transition duration-300 ease-in-out transform hover:scale-105'>Deny</button>
          </div>
        </div>
      </div>
    </div>
  );
}

AdminProductDetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    vendor: PropTypes.string.isRequired
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
