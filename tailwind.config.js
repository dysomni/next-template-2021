const colors = require('tailwindcss/colors')

module.exports = {
  purge: process.env.NODE_ENV === 'production' ? ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'] : [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.indigo['800'],
          dark: colors.indigo['400']
        },
        secondary: {
          light: colors.teal['600'],
          dark:  colors.teal['300'],
        },
        foreground: {
          light: 'black',
          dark: 'white',
        },
        'foreground-muted': {
          light: colors.trueGray['500'],
          dark: colors.trueGray['500'],
        },
        background: {
          light: 'white',
          dark: colors.trueGray['900']
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
