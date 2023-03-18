/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../images/mood-board.png')",
      },
      fontFamily: {
        'sans': ['Montserrat', 'Arial', 'sans-serif'],
        'serif': ['Cormorant Infant', 'serif'],
        'display': ['Bad Script', 'cursive']
      },
    },
  },
  plugins: [],
}
