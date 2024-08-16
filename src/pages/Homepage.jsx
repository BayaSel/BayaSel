import React from 'react';
import Slides from '../components/Slides/Slides';
import Offers from '../components/Offers/Offers';

function Homepage() {
  return (
    <div className="w-full h-screen relative">
      <img
        src="/images/background.png"
        alt="Background"
        className="w-full object-cover"
      />
      <div className='w-full absolute top-0 bottom-0'>
        <Slides />
      </div>
      <Offers />
    </div>
  );
}

export default Homepage;
