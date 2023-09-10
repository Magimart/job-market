/** @type {import('tailwindcss').Config} */
const deffaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./index.html","./src/**/*.{vue, js, ts}"],
  theme: {
    extend: {
        // this tels tailwind to make these font stytels to be the first to be used in the project
        fontFamily:{
           sans: ["open sans", ...deffaultTheme.fontFamily.sans],
        },
        colors:{
          "my-gray-1": "#dadce0",
          "my-green-1": "#808000"
        }
    },
  },
  plugins: [],
}

