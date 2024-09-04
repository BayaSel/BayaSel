/* eslint-disable react/prop-types */
export default function CustomRadioButton({ isChecked, onChange, label }) {
  return (
    <div className="flex w-full items-center font-semibold md:gap-6 gap-4 overflow-hidden text-sm lg:text-lg">
      <input
        type="radio"
        id={label}
        name={label}
        className="hidden"
        checked={isChecked}
        onChange={onChange}
      />
      <label
        htmlFor={label}
        className={`md:w-6 md:h-6 h-4 w-4 border text-sm md:text-lg ${
          isChecked ? 'bg-white border-black' : 'border-black'
        } rounded-full flex items-center justify-center cursor-pointer`}
        onClick={onChange}
      >
        {isChecked && <div className="w-3 h-3 bg-green-500 rounded-full"></div>}
      </label>
      <span>{label}</span>
    </div>
  );
}
