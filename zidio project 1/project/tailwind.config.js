/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      fontFamily: {
        'comic': ['Comic Sans MS', 'cursive'],
        'impact': ['Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
};