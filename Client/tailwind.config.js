/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    boxShadow: {
      md: '0px 4px 16px 0px rgba(0, 0, 0, 0.10)', 
    },
  },
  plugins: [],
}

