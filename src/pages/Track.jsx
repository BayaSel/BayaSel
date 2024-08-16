//import React from 'react'

function Track() {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-center items-center my-10 gap-5">
        <div className="lg:mr-5">
            <img src="/track.png" alt="image of a female tracking goods" />
        </div>
        <div className="flex flex-col">
            <h1 className="text-2xl font-semibold mb-4">Track a Package</h1>
            <form action="" className="flex flex-col items-center w-full">
                <input
                 type="text" 
                 className="w-[100%] my-2 py-3 pl-3 border rounded-[0.5rem] inline-block cursor-pointer outline-none focus:outline-[#4baf47] hover:outline-[#4baf47]"
                 placeholder="Enter your Tracking ID"
                 required
                />
                <button className="bg-[#4BAF47] mt-2 py-2 px-10 text-center rounded-[0.5rem] text-[#fff] " type="submit" >
                    Track
                </button>
            </form>
        </div>
    </div>
  )
}

export default Track