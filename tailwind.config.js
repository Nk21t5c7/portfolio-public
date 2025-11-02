/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#3b5998',
        'darker-blue': '#2f4778',
        'primary': 'hsl(200 100% 35%)',
        'description': 'hsl(200 25% 45%)',
        'gradient': 'hsl(200 100% 25%)',
        'gradient2': 'hsl(210 100% 98%)',
        'nav-name': 'hsl(220 100% 15%)',
        'circle-light1': '#bce0ff',
        'circle-light2': '#d2f0ff',
        'circle-light3': '#a1d7ff',
        'body-background': '#f5fbff',
        'footer-background': 'hsl(220 100% 15%)',
        'gray-icon': '#607d8b',
        'gray-icon-alt': '#78909c',
        'gray-text-sub': '#90a4ae',
        'background-light': '#d6efff',
        'backgorund-mid': '#b1deff',
        'secondary-background': 'hsl(190 50% 85%)',
        'secondary-foreground': 'hsl(200 100% 25%)',
        'card-background': 'hsl(210 50% 96%)',
        'border': 'hsl(190 30% 85%)'
      }
    },
  },
  plugins: [],
}