/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      primary: "#E6C744",
      secondary:"#C2C8DA",
      } ,
      fontFamily:{
        poppings:["poppins", 'san-serif']
      }
    },
  },
  plugins: [],
}

