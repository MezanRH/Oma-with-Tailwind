const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto',],
        'poppins': ['Poppins',],
      },
    },
  },
  plugins: [require("limbcss")],
}