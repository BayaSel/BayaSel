import React, { useEffect, useState } from 'react';

const Deals = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
      <div className='px-[100px]'>
        <div className='flex justify-between bg-[#388335] px-[21px] py-[19px] mb-[40px] text-[24px] font-semibold text-white'>
          <p>Deal of the day</p>
          <p>Time Left: {formatTime(time)}</p>
          <button>See all</button>
        </div>
        <div className='flex items-center bg-black rounded-xl mb-[40px] pl-[48px] pr-[192px] py-[25px] gap-[42px]'>
          <div className='text-white'>
            <p className='pb-[12px] text-[24px] font-semibold'>40% Off Tody</p>
            <p className='pb-[30px] text-[16px]'>Explore our 40% off section and enjoy fantastic discounts on a wide range of products. <br/>
            From Livestock essentials to Crops, there's something for everyone at unbeatable prices.</p>
            <button className='w-[141px] h-[48px] bg-[#4baf47] text-[16px] rounded-lg cursor-pointer'>Shop Now</button>
          </div>
          <img src="/Cool_black_woman_pointing_and_looking_at_copy_space-removebg-preview 1.png" alt="" />
        </div>
      </div>
  );
};

export default Deals;
