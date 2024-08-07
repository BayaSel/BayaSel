import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
function SideBar({ onLinkClick }) {
  return (
    <div className="font-poppins flex flex-col font-normal bg-white  rounded-lg shadow-sm gap-3">
      <Link to='profile' onClick={onLinkClick} className="flex text-base py-3 px-[42px] hover:bg-[#EDF7ED] active:first:bg-[#EDF7ED] focus:outline-none focus:bg-[#EDF7ED] gap-2">
      <i className="bx bx-sm bx-user"></i>
      <p>Profile</p>
      </Link>
      <Link to='orders' onClick={onLinkClick} className="flex text-base py-3 px-[42px] hover:bg-[#EDF7ED] focus:outline-none focus:bg-[#EDF7ED] gap-2">
      <img src="/shopping-bag.png" alt="shopping bag icon" />
      <p>Orders</p>
      </Link>
      <Link to='save-items' onClick={onLinkClick} className="flex text-base py-3 px-[42px] focus:outline-none focus:bg-[#EDF7ED] hover:bg-[#EDF7ED] gap-2">
      <i className='bx bx-sm bx-heart'></i>
      <p>Save Items</p>
      </Link>
      <Link to='/' className="flex text-base hover:bg-[#EDF7ED] gap-2 py-3 px-[42px]">
      <i className='bx bx-sm bx-export'></i>
      <p>Logout</p>
      </Link>
    </div>
  )
}

export default SideBar
