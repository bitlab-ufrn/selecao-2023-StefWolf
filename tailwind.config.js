/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        '--background-color': '#313338',
        '--background-secondary': '#6D6F78',
        '--background-input': '#383A40',
        '--background-button': '#4A61C4',
        '--text-color': '#F2F3F5',
        '--title-color': '#DBDEE1',
        '--sucess-color': '#2E8047',
        '--error-color': '#F45D60',
      
        '--background-color-l': '#FFFFFF',
        '--background-secondary-l': '#F2F3F5',
        '--text-color-l': '#494B50',
        '--title-color-l': '#060607',
      }
    },

    screens : {
      'mini-phone': '304px',
      'mini-tablet': '421px',
      'tablet': '640px',
      'tablet-large': '800px',
      'laptop': '1024px',
      'desktop': '1280px',
    }
  },
  plugins: [],
})

