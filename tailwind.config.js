/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#121725',
        title: '#54E6AF',
        inpit: '#2C344B',
        clear: '#FFF',
        social: '#5A668A',
        hover: '#B3FFE2',
        error: '#FB3E3E'
      },
      fontFamily: {
        chivo: ['Chivo', 'sans-serif'],
      },
      backgroundImage: {
        'background-mb': "url('./src/assets/mobile/image-host.jpg')",
      },
    },
  },
  plugins: [],
}

