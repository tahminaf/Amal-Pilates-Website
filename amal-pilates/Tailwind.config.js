/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        cream: '#EBE4DC',
        beige: '#D9CFC3',
        warmBrown: '#6B5B52',
        darkBrown: '#4A3F38',
      },
    },
  },
  plugins: [],
}