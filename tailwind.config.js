/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode:"jit",
  content: ["./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      'xs':'300px','mdd':'960px',...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat","public sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
