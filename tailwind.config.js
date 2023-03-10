/** @type {import('tailwindcss').Config} */



module.exports = {
  content: ['./src/**/*.{html,js}'],
  safelist: [ 'bg-blue-400', 
              'bg-green-400', 
              'bg-red-400',
            ],
  theme: { 
    colors: {
      gray: {
        200: "#000814"
      },
    },
    extend: {},
  },
  plugins: [{
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  }]
}