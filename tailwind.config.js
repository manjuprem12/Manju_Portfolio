module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: {
          400: '#4fd1c5',
          500: '#38b2ac',
        },
      },
      zIndex: {
        '100': '100',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}