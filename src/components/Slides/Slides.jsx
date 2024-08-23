import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoDash } from "react-icons/go";
 
const slides = [
    {
        title: "Explore Our Wide Range of Products",
        paragraph: "Discover a diverse selection of high-quality of seeds and plants that promise excellent yield and resilience",
    },
    {
        title: "Slide 2",
        paragraph: "Discover a diverse selection of high-quality of seeds and plants that promise excellent yield and resilience",
    },
    {
        title: "Slide 3",
        paragraph: "Discover a diverse selection of high-quality of seeds and plants that promise excellent yield and resilience",
    },
    {
        title: "Slide 4",
        paragraph: "Discover a diverse selection of high-quality of seeds and plants that promise excellent yield and resilience",
    },
];
function Slides() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };



    const { title, paragraph } = slides[currentIndex];
  return (
    <>
        <div className='flex justify-between px-[16px] lg:px-[100px]'>
            <div className='py-[155px]'>
                <IoIosArrowBack 
                className='text-white w-[60px] h-[60px] border-2 rounded-full active:bg-white active:text-black 
                hover:bg-white hover:text-black'
                onClick={handlePrev}
                />
            </div>
            <div className='flex flex-col items-center py-[81px]'>
                <div className='flex flex-col items-center'>
                    <h1 className='w-[725px] h-[48px] text=[16px] lg:text-[40px] text-white font-semibold text-center leading-[48px] mb-[39px]'>{title}</h1>
                    <p className='w-[621px] h-[64px] text-[20px] text-white font-semibold text-center mb-[24px]'>{paragraph}</p>
                </div>
                <button className='w-[141px] h-[48px] bg-green-700 flex justify-center p-[12px] gap-[3px] rounded-md mb-[60px]'>
                    <p className='text-[16px] font-semibold'>Shop Now</p>
                    <img src="/shopping-cart.png" alt="" className='w-[24px] h-[24px]'/>
                </button>
                <div className='flex gap-[12px]'>
                    {[...Array(slides.length)].map((_,index)=>
                    <span 
                    key={index}
                    className={`w-[30px] h-[6px] rounded-md ${index === currentIndex ? 'bg-green-500' : 'bg-white'}`} 
                    />)}
                </div>
            </div>
            <div className='py-[155px]'>
                <IoIosArrowForward
                className='text-white w-[60px] h-[60px] border-2 rounded-full active:bg-white active:text-black 
                hover:bg-white hover:text-black'
                onClick={handleNext}/>
            </div>
             
        </div>
    </>
  )
}

export default Slides