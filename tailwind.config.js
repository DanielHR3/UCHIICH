/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Noto Serif', 'serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#fffbe6',
          bright: '#fffdef',
          container: {
            low: '#fdf8e1',
            lowest: '#ffffff',
            highest: '#f4f0d5'
          }
        },
        primary: {
          DEFAULT: '#ff6d00', // Client Orange
          container: '#e65100',
          on: '#ffffff'
        },
        secondary: {
          DEFAULT: '#e4007c', // Rosa Mexicano
          container: '#c2185b',
          on: '#ffffff'
        },
        accent: {
          DEFAULT: '#006847', // Verde Selva
          on: '#ffffff'
        },
        turquesa: {
          DEFAULT: '#00bfa5',
          on: '#ffffff'
        },
        on: {
          surface: {
            DEFAULT: '#2d2d2d',
            variant: '#5d4037'
          }
        },
        outline: {
          DEFAULT: '#d7ccc8',
          variant: '#efebe9'
        }
      }
    },
  },
  plugins: [],
}
