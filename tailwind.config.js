// /** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      darkMode: 'class',
      colors: {
        primary: '#c1c1c1',
        secondary: '#909090',
        tertiary: '#242424',
      },
      fontFamily: {
        stanley: ['var(--stanley-font)'],
        stanleybold: ['var(--stanleybold-font)'],
        stanleybolditalic: ['var(--stanleybolditalic-font)'],
        stanleyitalic: ['var(--stanleyitalic-font)'],
      },
    },
  },
  plugins: [],
};
