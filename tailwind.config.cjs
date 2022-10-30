/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [ "synthwave", "light", "dark" ],
  },
  plugins: [require("daisyui")],
  
};