import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import { green } from '@mui/material/colors';

export default function CartHeader() {
  return (
    <div  className="flex px-10 justify-between py-10 bg-gray-100">
      <div className='flex justify-between'>
        <p>Home<ArrowRightRoundedIcon  /></p>
        <p className='text-gray-400'>Shopping cart</p>
      </div>
      <div>
        <p className='text-green-500'>continue Shopping <WestRoundedIcon sx={{ color: green[500] }} /></p>
      </div>
    </div>
  )
}
