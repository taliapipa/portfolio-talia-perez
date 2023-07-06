/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius:{
      't-3xl': '75px 75px 0 0'
    },
    fontSize: {
      sm: '16px',
      base: '18px',
      xl: '24px',
      '2xl': '26px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '36px',
    },
    extend: {
      colors: {
        primary: "#706FE5",
        secondary: "#5D5BF5"
      }
    },
  },
  plugins: [],
}