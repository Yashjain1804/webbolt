/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          base: '#0b0f14',
          soft: '#11161d',
          elevated: '#161c25',
          border: '#1f2733',
        },
        accent: {
          DEFAULT: '#3fb682',
          soft: '#2c8a62',
          bright: '#54c995',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
