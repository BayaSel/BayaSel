import React from 'react'

const offer = [
    {
        img: "/truck.png",
        title: "Swift Delivery",
        paragraph: "Lightening - fast delivery to your doorstep.",
    },
    {
        img: "/discount-tag.png",
        title: "Unbeatable Discount",
        paragraph: "Exclusive deals to help you save more.",
    },
    {
        img: "/payment.png",
        title: "Pay on Delivery",
        paragraph: "Inspect your order before making payments.",
    },
    {
        img: "/customer-support.png",
        title: "24/7 Support",
        paragraph: "Get in touch with live support anytime",
    },
]

function Offers({img, title, paragraph}) {
  return (
    <div className='mt-[24px] flex justify-between gap-[24px] mb-[40px] px-[100px]'>
        {offer.map(items => (
        <div className='w-[295px] h-[120px]  bg-slate-50 flex justify-evenly gap-[24px] pl-[24px] pr-[19px] rounded-md'>
        <div className='w-[48px] h-48px]'>
            <img src={items.img} alt="" className='pt-[37px] pb-[35px]'/>
        </div>
        <div className='pt-[27px] pb-[37px] w-[180px] h-[56px]'>
            <h3 className='text-[16px] font-semibold'>{items.title}</h3>
            <p className='text-[12px] text-slate-800'>{items.paragraph}</p>
        </div>
    </div>
    )
  )}
    </div>
  )}

export default Offers