/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './container/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-leagueSpartan)'],
      },
      colors: {
        primary: 'hsl(180, 29%, 50%)',
        secondary: 'hsl(180, 14%, 20%)',
        tertiary: 'hsl(180, 52%, 96%)',
        lightGrayishCyan: 'hsl(180, 31%, 95%)',
        darkGrayishCyan: 'hsl(180, 8%, 52%)',
      },
    },
  },
  plugins: [],
}
