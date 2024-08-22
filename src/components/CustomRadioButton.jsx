import { useState } from 'react';

export default function CustomRadioButton() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        id="custom-radio"
        name="option"
        className="hidden"
        checked={isChecked}
        onChange={() => setIsChecked(true)}
      />
      <label
        htmlFor="custom-radio"
        className={`w-6 h-6 border-2 ${
          isChecked ? 'bg-green-500 border-green-500' : 'border-gray-300'
        } rounded-full flex items-center justify-center cursor-pointer`}
      >
        {isChecked && <div className="w-4 h-4 bg-white rounded-full"></div>}
      </label>
      <span>Option 1</span>
    </div>
  );
}
