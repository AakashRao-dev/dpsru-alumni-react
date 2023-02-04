/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      OpenSans: ['Open Sans', 'sans-serif'],
      Roboto: ['Roboto', 'sans-serif'],
    },
    colors: {
      'dark-blue': '#003366',
      'very-dark-blue': '#00264D',
      'custom-yellow': '#F0C000',
      'sky-blue': '#086BAE',
      'light-gray': '#E9E9E9',
      black: '#111111',
    },
  },
  plugins: [],
};
