/** @type {import('tailwindcss').Config} */



module.exports = {
  content: ['./src/**/*.{html,js}'],
  safelist: [ 'bg-blue-400', 
              'bg-green-400', 
              'orange-400',
              'orange-500',
              'orange-600',
              'orange-700',
              'orange-800',
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