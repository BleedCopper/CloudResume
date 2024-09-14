import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        lighter: "#2d3f5c",
        DEFAULT: "#283851",
      },
      accent: {
        DEFAULT: "#60dafb",
        darker: "#04548c",
      },
      text: {
        lighter: "#b4b7be",
        DEFAULT: "#ebe9da",
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
