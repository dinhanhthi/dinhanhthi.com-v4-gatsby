module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        wave: 'wave 2.5s infinite',
      },
      backgroundImage: {
        'repeating-dots':
          '-webkit-repeating-radial-gradient(center center,#777,#777 1px,transparent 0,transparent 100%)',
      },
      fontFamily: {
        heading: ['Recoleta', 'Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        main: '#1e293b',
        'main-dark': '#f8fafc',
        'bg-dark': '#2f3240',
        'bd-dark': '#3b3e54',
      },
    },
  },
  plugins: [],
}
