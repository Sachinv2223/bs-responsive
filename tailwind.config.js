/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        bBlue: {
          DEFAULT: '#16638f',
          light: '#1d82bb',
          dark: '#0f4463',
        }
      },
    }
  },
  plugins: [],
}
