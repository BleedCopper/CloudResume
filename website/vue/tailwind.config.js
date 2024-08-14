/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        lighter: '#365060',
        DEFAULT: '#2f4858'
      },
      accent: {
        DEFAULT: '#3af49b',
        darker: '#2C585C'
      },
      text: {
        lighter: '#99b0b9',
        DEFAULT: '#ebe9da'
      }
    },
    extend: {}
  },
  plugins: []
}
