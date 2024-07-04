//import React from 'react'
import { useContext, useState } from 'react';
import { UserProfileContext } from '../components/UserProfileContext';

function Profile() {
  const { profile, addAddress, updateAddress } = useContext(UserProfileContext);
  const [showForm, setShowForm] = useState(false);
  const [addressIndex, setAddressIndex] = useState(null);
  const [address, setAddress] = useState('');
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);


  const handleAddressButtonClick = () => {
    setShowForm(true);
    setAddressIndex(null);
    setAddress('');
  };

  const handleEditButtonClick = (index) => {
    setShowForm(true);
    setAddressIndex(index);
    setAddress(profile.addresses[index]);
  };

  const handleSave = () => {
    if (addressIndex === null) {
      addAddress(address);
    } else {
      updateAddress(addressIndex, address);
    }
    setShowForm(false);
    setAddress('');
    setAddressIndex(null);
  };

  const handleRadioChange = (index) => {
    setSelectedAddressIndex(index);
  };

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
        <div>
        <button onClick={handleAddressButtonClick} className="flex text-base gap-1 text-[#4BAF47] hover:bg-[#EDF7ED] p-0.5">
            <i className='bx bx-sm bx-plus'></i>
            <p>ADD ADDRESS</p>
        </button>
        </div>
      </div>

      <div className="mx-auto my-10">
      {profile.addresses.length === 0 ? (
          <p className="font-normal text-base text-center pt-10">You do not have shipping address</p>
        ) : (
          <ul className='gap-3'>
            {profile.addresses.map((addr, index) => (
              <li key={index} className='flex flex-row border border-[#c4c4c4] rounded-lg h-[136px] gap-1 px-6 py-7 my-4'>
                 <label className='mr-3 '>
                  <input
                    type="radio"
                    name="address"
                    checked={selectedAddressIndex === index}
                    onChange={() => handleRadioChange(index)}
                    className='border-[#4BAF47] h-6 w-6'
                  />
                  </label>
                  <div className='w-full'>
                    <div className='flex justify-between'>
                      <p className='font-semibold text-base'>Customer Address</p>
                      <button onClick={() => handleEditButtonClick(index)} className='flex gap-1 text-[#4BAF47] text-base'>Edit
                      <i className='bx bx-sm bx-edit-alt'></i>
                      </button>
                    </div>
                
                    <div className='font-normal mt-3 gap-3 text-base'>
                      <p>Patrick Chukwudifu</p>
                      {addr}
                    </div>
                  </div>
              </li>
            ))}
          </ul>
        )}
        
        {showForm && (
        <div>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
      </div>
    </div>
  )
}

export default Profile
