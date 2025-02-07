/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'maga-red': '#ff0000',
        'maga-blue': '#0000ff',
      },
      backgroundImage: {
        'flag-gradient': `linear-gradient(
          0deg,
          rgba(255, 0, 0, 0.1) 0%,
          transparent 10%,
          transparent 20%,
          rgba(255, 255, 255, 0.1) 30%,
          transparent 40%,
          transparent 50%,
          rgba(0, 0, 255, 0.1) 60%,
          transparent 70%
        )`,
      }
    },
  },
  plugins: [],
} 