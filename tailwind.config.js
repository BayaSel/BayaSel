/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        'custom-1024': {'raw': '(min-width: 1024px) and (max-width: 1025px)'},
        'custom-1280': {'raw': '(min-width: 1026px) and (max-width: 1280px)'},
      }
    },
  },
  plugins: [],
};
