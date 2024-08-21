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
        className={`w-6 h-6 bg-gray-200 border-2 border-gray-300 rounded-md flex items-center justify-center ${
          checked ? "bg-white border-black" : ""
        }`}
      >
        <i className={`bx bx-check ${checked ? "block" : "hidden"}`}></i>
      </div>
      <span className="ml-2">My Custom Checkbox</span>
    </label>
  );
};

export default CustomCheckbox;
