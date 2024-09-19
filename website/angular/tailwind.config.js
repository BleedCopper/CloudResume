/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        lighter: "#4D4B70",
        DEFAULT: "#484665",
      },
      accent: {
        DEFAULT: "#fd278c",
        darker: "#7B4382",
      },
      text: {
        lighter: "#99b0b9",
        DEFAULT: "#ebe9da",
      },
    },
    extend: {},
  },
  plugins: [],
};
