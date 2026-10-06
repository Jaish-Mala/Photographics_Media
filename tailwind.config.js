/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#141414',
          50: '#f5f5f5',
          100: '#e6e6e6',
          200: '#c8c8c8',
          300: '#a3a3a3',
          400: '#7a7a7a',
          500: '#525252',
          600: '#3a3a3a',
          700: '#2a2a2a',
          800: '#1e1e1e',
          900: '#141414',
          950: '#0a0a0a',
        },
        ivory: {
          DEFAULT: '#f5f1ea',
          dark: '#e8e2d6',
          muted: '#c4beb2',
        },
        gold: {
          DEFAULT: '#c4a661',
          light: '#d4be7e',
          dark: '#a88a44',
          muted: '#8a7338',
        },
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'wider-2': '0.15em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
