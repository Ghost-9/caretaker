/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-700': '#1F2A44',
        'green-800': '#1A253A',
        'green-900': '#151F31',
        'yellow-100': '#FEF9C3',
        'yellow-200': '#FEF3C7',
        'yellow-300': '#FCD34D',
        'orange-500': '#F97316',
      },
      fontFamily: {
        sans: ['"Inter", sans-serif'],
      },
    },
  },
  plugins: [],
};