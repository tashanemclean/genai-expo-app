/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        abril: ['AbrilFatface_400Regular'],
        'montserrat-100': ['Montserrat_100Thin'],
        'montserrat-200': ['Montserrat_200ExtraLight'],
        'montserrat-300': ['Montserrat_300Light'],
        montserrat: ['Montserrat_400Regular'],
        'montserrat-700': ['Montserrat_700Bold'],
        'montserrat-700-italic': ['Montserrat_700Bold_Italic'],
      },
    },
  },
  plugins: [],
};
