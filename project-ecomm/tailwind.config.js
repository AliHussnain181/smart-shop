/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
       colors: {
        mycolor: '#ff6347', // Choose any color code you like
      },
    },
  },
  plugins: [
  ],
}