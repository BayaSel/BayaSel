import { createContext, useState } from 'react';

// Create context
const UserProfileContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    addresses: [],
  });

  const addAddress = (newAddress) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      addresses: [...prevProfile.addresses, newAddress],
    }));
  };

  const updateAddress = (index, updatedAddress) => {
    const updatedAddresses = [...profile.addresses];
    updatedAddresses[index] = updatedAddress;
    setProfile((prevProfile) => ({
      ...prevProfile,
      addresses: updatedAddresses,
    }));
  };

  return (
    <UserProfileContext.Provider value={{ profile, addAddress, updateAddress }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export { UserProfileContext, UserProfileProvider };
