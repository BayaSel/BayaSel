import React, { useEffect } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { useState } from 'react';
import Deals from '../Deals/Deals';


function Products({image, title, price, id}) {

const [products, setProducts] = useState([]);
const [seeAll, setSeeAll] = useState(false)

useEffect(() => {
  const fetchProducts = async () => {
    let url = 'https://fakestoreapi.com/products'
    if (!seeAll) {
      url += url.includes('?') ? '&limit=4' : '?limit=4';
    }
    try {
      const res = await fetch (url);
      const json = await res.json();
      setProducts(json);
    }
    catch (error) {
      console.error('Error fetching error:', error)
    }
  }
  fetchProducts();
}, [seeAll])

    const handleClick = () => {
      setSeeAll(true)
    }

  return (
    <>
      <div className='px-[100px] mb-[51px]'>
          <div className='flex justify-between pb-[40px]'>
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
          <div className='flex justify-between'>
              {products.map(product => (
                <div key={product.id} className='w-[292px] h-[318px] bg-white shadow-lg rounded-lg'> 
                  <img src={product.image} alt="" className='w-[292px] h-[200px] object-contain'/>
                  <div className='p-3'>
                    <h2>{product.title.toUpperCase()}</h2>
                    <p>${product.price}</p>
                  </div>
                </div>
              ))}
          </div>
      </div>

      {/* Best Seller */}
      <div className='px-[100px] mb-[51px]'>
          <div className='flex justify-between pb-[40px]'>
              <h4 className='text-[24px] font-semibold text-[#676767]'>Best Seller</h4>
              <div className='flex gap-[6px] items-center'>
                  <button 
                  onClick={handleClick}
                  className='text-[14px] text-[#4BAF47]'>See All</button>
                  <span 
                  onClick={handleClick}
                  className='text-[16px] text-[#4BAF47]'><FaChevronRight/></span>
              </div>
          </div>
          <div className='flex justify-between'>
              {products.map(product => (
                <div key={product.id} className='w-[292px] h-[318px] bg-white shadow-lg rounded-lg'> 
                  <img src={product.image} alt="" className='w-[292px] h-[200px] object-contain'/>
                  <div className='p-3'>
                    <h2>{product.title.toUpperCase()}</h2>
                    <p>${product.price}</p>
                  </div>
                </div>
              ))}
          </div>
      </div>

      {/* Deal of the day */}

      <Deals />

      {/* Latest Product */}
      
    </>
  )
}

export default Products