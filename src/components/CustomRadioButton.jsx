/* eslint-disable react/prop-types */
export default function CustomRadioButton({ isChecked, onChange, label }) {
  return (
    <div className="flex items-center gap-8">
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
        className={`w-6 h-6 border ${
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
