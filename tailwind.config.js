/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        purple: "hsl(259, 100%, 65%)",
        ligth_red: "hsl(0, 100%, 67%)",
        off_white: "hsl(0, 0%, 94%)",
        light_grey: "hsl(0, 0%, 86%)",
        smokey_grey: "hsl(0, 1%, 44%)",
        off_black: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
