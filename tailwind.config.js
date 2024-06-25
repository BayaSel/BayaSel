/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      margin: {
        "-12.5": "-50px",
      },
      height: {
        30: "120px",
      },
      colors: {
        "4BAF47": "#4BAF47",
      },
    },
  },
  plugins: [],
};
