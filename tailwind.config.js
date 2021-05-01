const tailwindColors = require("tailwindcss/colors")

const colors = {
  current: "currentColor",
  transparent: "transparent",
  black: "black",
  white: "white",
  gray: tailwindColors.gray,
}

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    colors,
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["sans"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
