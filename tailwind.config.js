/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fc06a2",
        secondary: "#6200ff",
      },
      container:{
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}