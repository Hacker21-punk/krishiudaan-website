/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'ku-yellow': '#faa61e',
        'ku-dark': '#1a1a2e',
        'ku-black': '#0a0a0a',
        'ku-grey': '#f5f5f5',
        'ku-teal': '#153a46',
      },
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        'urbanist': ['"Urbanist"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
