//import React from 'react'

function Profile() {
  return (
    <div className="bg-white shadow font-poppins p-5 text-[#343434] md:h-[710px]">
      <h1 className="font-semibold text-2xl my-5">My Profile</h1>
      <div className="flex gap-2 my-8">
        <i className='bx bx-user-circle bx-lg' ></i>
        <div className="gap-1">
            <p className="font-semibold text-base">Patrick Chukwudifu</p>
            <p className="font-normal text-xs">patrickchukwudifu716@gmail.com</p>
        </div>
      </div>

      <div className="flex justify-between font-semibold my-5">
        <h1 className="text-2xl">Shipping Information</h1>
        <button className="flex text-base gap-1 text-[#4BAF47] hover:bg-[#EDF7ED] p-0.5">
            <i className='bx bx-sm bx-plus'></i>
            <p>ADD ADDRESS</p>
        </button>
      </div>

      <div className="mx-auto my-10">
        <p className="font-normal text-base text-center pt-10">You do not have shipping address</p>
      </div>
    </div>
  )
}

export default Profile
