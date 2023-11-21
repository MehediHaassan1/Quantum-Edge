/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "neutralSilver": "#f5f5f5",
        "neutralDGray": "#4d4d4d",
        "brandPrimary": "#4caf4f",
        "neutralGray": "#717171",
        "gray900": "#18191f",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

