/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '22.5rem', // 360px
      md: '48rem', // 768px
      lg: '80rem', // 1280px
    },
    extend: {
      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
      },
      colors: {
        primary: 'var(--yellow-color)',
        dark: 'var(--dark-color)',
        light: 'var(--light-color)',
        snow: 'var(--snow-color)',
        'dark-navy': 'var(--dark-navy-color)',
        'dim-grey': 'var(--dim-grey-color)',
        'light-grey': 'var(--light-grey-color)',
        'light-yellow': 'var(--light-yellow-color)',
      },
    },
  },
  plugins: [],
}
