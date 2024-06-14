import orangeImg from '../assets/cart/orange.png'
import CartHeader from './CartHeader'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { red } from '@mui/material/colors';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Styles/cart.css'
import { useState } from 'react';

function Footer() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <CartHeader />
      <div className='px-10 py-5 my-20 bg-white-200 flex justify-between'>
        <div>
          <table className='text-left '>
            <thead className='border-b-[1px] border-gray-500'>
              <tr>
                <th className='pb-10'>Product</th>
                <th className='pb-10'>Price</th>
                <th className='pb-10'>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='py-10 pr-20'>
                  <img src={orangeImg} alt="orange" className='inline-block mr-2' />
                  Fresh orange
                </td>
                <td className='pr-10'>$250.00</td>
                <td  className=''>
                  <div className='flex justify-between'>
                    <div className='flex justify-between items-center px-2 mr-2  border-2 rounded-[1rem] w-[9rem]'>
                      <button onClick={() => {
                        setCount(c => c === 0 ? 0 : c - 1)
                      }}><RemoveIcon color={`${count === 0 && "disabled"}`} /></button>
                      <p className='inline-block px-4'>{count}</p>
                      <button onClick={() => {
                        setCount(c => c + 1)
                      }}><AddIcon /></button>
                    </div>
                    <button className='my-5'>
                      <DeleteOutlineIcon sx={{ color: red[500] }} />
                    </button>
                  </div>
                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          hello
        </div>
      </div>
    </div>
  )
}

export default Footer