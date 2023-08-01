/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-theme': '#1E1E2C',
      },
      screens: {
        '8xs': { max: '145px' },
        '7xs': { max: '195px' },
        '6xs': { max: '240px' },
        '5xs': { max: '320px' },
        '4xs': { max: '375px' },
        '3xs': { max: '411px' },
        '2xs': { max: '480px' },
        'xs': { max: '540px' },
        'xxs': { max: '639px' },
      },
      aspectRatio: {
        '3/2': '3 / 2',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })], // eslint-disable-line no-undef
}
