/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto Slab, serif'],
        'dm': ['DM Sans, serif'],
        'rock': ['"RocknRoll One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}