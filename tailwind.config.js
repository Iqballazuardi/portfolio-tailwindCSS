/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary:'#6366f1',
        secondary:'#3f3f46',
        light:'#71717a',
      },
      screens:{
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

