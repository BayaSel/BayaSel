import { useState } from "react";

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div
        className={`w-6 h-6 bg-white border border-black rounded-md flex items-center justify-center ${
          checked ? "bg-white border-black" : ""
        }`}
      >
        <i className={`bx bx-check ${checked ? "block" : "hidden"} text-black`}></i>
      </div>
    </label>
  );
};

export default CustomCheckbox;
