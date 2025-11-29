/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      },
      // screens: {
      //   "sano400px": "400px"
      // },
    },
  },
  plugins: [],
}

