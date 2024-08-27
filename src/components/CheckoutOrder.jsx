const Order = ()=>{

    const customClass = 'flex justify-between font-medium text-sm md:text-base'
    return(
        <section 
        className="flex flex-col mx-auto gap-5 h-3/4 custom-1280:w-1/4
        p-5 custom-1280:p-5 md:p-16 box-border border rounded-xl shadow-lg w-[98%] lg:w-1/5 lg:p-5
        border-gray-300 mb-5 custom-1024:w-[98%]">
            <h2 className="font-semibold text-lg mb-2">Your Order</h2>
            <div className="flex items-center gap-4 font-medium text-sm md:text-base">
                <img src="/Rectangle 3.svg" alt="oranges" />
                <div className="flex flex-col gap-3 ">
                    <span>Fresh Orange</span>
                    <p>$250.00</p>
                </div>
            </div>
            <div className="flex flex-col border-y border-gray-200 py-5 gap-4">
                <div className={customClass}>
                    <span>Subtotal</span>
                    <span>$1,300.00</span>
                </div>
                <div className={customClass}>
                    <span>Delivery Fee</span>
                    <span>$10.00</span>
                </div>
                <div className={customClass}>
                    <span>Discount</span>
                    <span>-$5.00</span>
                </div>
            </div>
            <div className={customClass}>
                <span>Grand Total</span>
                <span>$1,305.00</span>
            </div>
        </section>
    )
}

export default Order;