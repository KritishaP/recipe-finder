/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackish: '#000',
        whitish: '#fff',
        orangish: '#E16120',
        'dark-orange': '#C5541A',
        greenish: '#3A9691',
        grayish: '#707070',
        'dark-gray': ' #434343',
        dark: '#232323',
        whitesmoke: '#f5f5f5',
      },
      fontFamily: {
        'raleway': 'Raleway, sans-serif'
      },

    },
  },
  plugins: [],
}

