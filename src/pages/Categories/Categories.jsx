import React from 'react'

const categories = [
    {
        img: "/crop.png",
        title: "Crops"
    },
    {
        img: "/livestock.png",
        title: "Livestock"
    },
    {
        img: "/poultry.png",
        title: "Poultry Products"
    },
    {
        img: "/aquaculture.png",
        title: "Aquaculture"
    },
    {
        img: "/forestry.png",
        title: "Forestry"
    },
]

function Categories({img, title}) {
  return (
    <div className='px-[100px] mt-[40px] mb-[40px]'>
        <h3 className='text-[24px] text-[#676767] font-semibold pb-[40px]'>Shop by categories</h3>
        <div className='flex gap-[20px] justify-between'>
            {categories.map(items => (
                <div className='flex flex-col items-center'>
                    <img src={items.img} alt={items.title} className='pb-[33px]'/>
                    <h4 className='text-[24px] font-semibold text-[#676767]'>{items.title}</h4>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Categories