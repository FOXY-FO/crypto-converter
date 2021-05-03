const tailwindColors = require("tailwindcss/colors")

const colors = {
  current: "currentColor",
  transparent: "transparent",
  black: "black",
  white: "white",
  gray: tailwindColors.gray,
  richBlack: {
    100: "#11334f",
    200: "#0e2a41",
    300: "#0b2133",
    400: "#081825",
    DEFAULT: "#050F17",
    600: "#020609",
    700: "#000",
  },
  verdigris: {
    100: "#00edff",
    200: "#0de",
    300: "#00cedd",
    400: "#00becc",
    DEFAULT: "#00AEBB",
    600: "#009eaa",
    700: "#008e99",
    800: "#007f88",
    900: "#006f77",
  },
}

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    colors,
    container: {
      center: true,
    },
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
