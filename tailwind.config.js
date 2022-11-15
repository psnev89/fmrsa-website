const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content:[
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
    './**/*.html',
    './*.md'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'Arial', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}