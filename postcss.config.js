module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-focus-visible': {
      replaceWith: '[data-focus-visible-added]',
    },
    autoprefixer: {},
  },
};

// module.exports = {
//   // plugins: [require('tailwindcss'), require('autoprefixer')],
//   plugins: ['tailwindcss', 'autoprefixer'],
// };
