/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
      },
      colors: {
        'primary': 'var(--yellow-color)',
        'dark': 'var(--dark-navy-color)',
        'light': 'var(--white-color)',
        'dim-grey': 'var(--dim-grey-color)',
        'light-grey': 'var(--light-grey-color)',
        'snow': 'var(--snow-color)',
        'light-yellow': 'var(--light-yellow-color)',
      },
    },
  },
  plugins: [],
}
