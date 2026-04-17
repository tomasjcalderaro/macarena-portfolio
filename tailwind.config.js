/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#F5F0E6",
        cream: "#FAF7F2",
        brownLight: "#D6BFA7",
        brown: "#A68A64",
      },
    },
  },
  plugins: [],
}