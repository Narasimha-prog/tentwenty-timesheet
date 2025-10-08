const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
 theme: {
  extend: {
    colors: {
      'primary-600': '#1C64F2',
    },
    fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
  },
},
  plugins: [],
};
