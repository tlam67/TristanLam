/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'blue-black': '#0d1117',
        'header-gray': '#161b22',
        'arrow-blue': '#58a6ff',
      },
    },
  },
  plugins: [],
}
