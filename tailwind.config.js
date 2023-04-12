/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        '--background-color': '#313338',
        '--background-secondary': '#6D6F78',
        '--background-input': '#383A40',
        '--text-color': '#F2F3F5',
        '--title-color': '#DBDEE1',
        '--sucess-color': '#2E8047',
        '--error-color': '#F45D60',
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
}

