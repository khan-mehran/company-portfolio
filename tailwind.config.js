/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark: '#161819',
        light: '#fff',
        primary: '#55BDB3',
        primaryLight: '#F0F8F8',
        primaryHover: '#B2693D',
        slate: '#858D98',
        black: '#151E23',
        darkSlateBlue: '#25343B',
        midNightBlue: '#1C1F24',
        mistyBlue: '#EEF2F5'
      },
    },
  },
  plugins: [],
}
