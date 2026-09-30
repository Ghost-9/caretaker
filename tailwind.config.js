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
        forest: {
          50: '#F2F7F5',
          100: '#E1EDE8',
          200: '#C2DBD2',
          300: '#94C0B2',
          600: '#236A56',
          700: '#1B5646',
          800: '#144236',
          900: '#0E2E25',
          950: '#071A15',
        },
        sand: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F4F0E8',
          300: '#E8E1D3',
          400: '#D5C7B0',
          800: '#5A4F3D',
          900: '#3D3528',
        },
        bronze: {
          DEFAULT: '#B8860B',
          light: '#D4AF37',
          dark: '#936C05',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'premium': '0 20px 40px -15px rgba(14, 46, 37, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
        'elevated': '0 30px 60px -20px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
