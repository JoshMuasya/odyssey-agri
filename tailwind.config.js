/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '301px',
      'md': '500px',
      'lg': '1000px'
    },
    colors: {
      gray: '#D9D9D9',
      yellow: '#FEDF00',
      darkgreen: '#023020',
      backgreen: '#02302080'
    },
    fontSize: {
      's': '16px',
      'm': '24px',
      'l': '32px',
      'lx': '36px',
      'lg': '40px',
      'xl': '48px',
      'xxl': '80px',
    },
    fontFamily: {
      'mont': 'Montserrat, sans-serif',
      'frank': 'Libre Franklin, sans-serif',
    },
    extend: {},
  },
  plugins: [],
}
