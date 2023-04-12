/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        '--background-color': '#313338',
        '--text-color': '#F2F3F5',
        '--title-color': '#DBDEE1',
        '--sucess-color': '#2E8047',
        '--error-color': '#F45D60',
      }
    },
  },
  plugins: [],
}

