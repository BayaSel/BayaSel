//import React from 'react'

function Track() {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-center items-center my-12 gap-5">
        <div className="lg:mr-3">
            <img src="/track.png" alt="image of a female tracking goods"/>
        </div>
        <form action="" className="flex flex-col items-center py-8 bg-[#fcfdfc] w-full lg:bg-inherit lg:w-auto">
            <h1 className="text-2xl font-semibold mb-2">Track a Package</h1>
            <input
                type="text" 
                className="w-[300px] lg:w-[500px] my-6 py-2 pl-3 border rounded-[0.5rem] inline-block cursor-pointer outline-none focus:outline-[#4baf47] hover:outline-[#4baf47]"
                placeholder="Enter your Tracking ID"
                required
            />
            <button className="bg-[#4BAF47] hover:bg-[#21b71c] mt-2 py-2 px-10 text-center rounded-[0.5rem] text-[#fff] " type="submit" >
                Track
            </button>
        </form>
    </div>
  )
}

export default Track