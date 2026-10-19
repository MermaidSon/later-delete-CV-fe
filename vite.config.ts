/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Кастомные цвета для "Modern Engineering" стиля
        emerald: {
          400: '#34d399',
          500: '#10b981',
        }
      }
    },
  },
  plugins: [],
}