/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat']
      },
      animation: {
        'goyang': 'goyang 1s ease-in-out infinite'
      },
      keyframes: {
        goyang: {
          '0%, 100%': {transform: 'rotate(-5deg)'},
          '50%': {transform: 'rotate(5deg)'}
        }
      }
    },
  },
  plugins: [],
}
