/* eslint-disable react/prop-types */
import { useState } from "react";

const CustomCheckbox = ({ checked: initialChecked = false, onChange, className = "" }) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <label className={`inline-flex items-center cursor-pointer ${className}`}>
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={handleChange}
      />
      <div
        className={`md:w-6 md:h-6 w-5 h-5 bg-white border border-black rounded-md flex items-center justify-center ${
          checked ? "bg-white border-black" : ""
        }`}
      >
        <i className={`bx bx-check ${checked ? "block" : "hidden"} text-black`}></i>
      </div>
    </label>
  );
};

export default CustomCheckbox;
