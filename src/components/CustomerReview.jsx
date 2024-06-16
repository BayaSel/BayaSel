import React, { useState } from "react";

function CustomerReview() {
  const [selectedOption, setSelectedOption] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <>
      <h3 className="font-semibold text-xl my-3 font-poppins text-[#343434]">
        CustomerReview
      </h3>
      <div className="flex flex-column md:flex-row">
        <div className="flex"></div>
        <div className="font-poppins text-[#343434] text-base">
          <h4 className="font-semibold">Write a review</h4>
          <form className="py-6">
            <label
              htmlFor="options"
              className="block font-normal text-[#343434] mb-2"
            >
              Rating
            </label>
            <select
              id="options"
              value={selectedOption}
              onChange={handleChange}
              className="block w-full p-2 border border-[#C4C4C4] text-[#c4c4c4] rounded-md focus:outline-none focus:ring-[#4BAF47] focus:border-[#4BAF47] sm:text-sm mb-2"
            >
              <option value="" disabled>
                5 - Excellent
              </option>
              <option value="excellent">5 - Excellent</option>
              <option value="verygood">4 - Very Good</option>
              <option value="good">3 - Good </option>
              <option value="fair">2 - Fair</option>
              <option value="poor">1 - Poor</option>
            </select>

            <label
              htmlFor="options"
              className="block font-normal text-[#343434] my-2"
            >
              Review
            </label>

            <textarea
              id="textarea"
              value={textareaValue}
              onChange={handleTextareaChange}
              placeholder="Leave a review here"
              className="block w-full h-52 p-2 border border-[#C4C4C4] rounded-md focus:outline-none focus:ring-[#4BAF47] focus:border-[#4BAF47] sm:text-sm"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default CustomerReview;
