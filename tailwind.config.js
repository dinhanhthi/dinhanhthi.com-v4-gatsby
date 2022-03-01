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
        // eslint-disable-next-line prettier/prettier
        wave: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 70 500 60\' preserveAspectRatio=\'none\'%3E%3Crect x=\'0\' y=\'0\' width=\'500\' height=\'500\' style=\'stroke: none; fill: %23f6f6f6;\' /%3E%3Cpath d=\'M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z\' style=\'stroke: none; fill: %23ffffff;\'%3E%3C/path%3E%3C/svg%3E")',
        'wave-dark':
          // eslint-disable-next-line prettier/prettier
          'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 70 500 60\' preserveAspectRatio=\'none\'%3E%3Crect x=\'0\' y=\'0\' width=\'500\' height=\'500\' style=\'stroke: none; fill: %23282a36;\' /%3E%3Cpath d=\'M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z\' style=\'stroke: none; fill: %23323541;\'%3E%3C/path%3E%3C/svg%3E")',
      },
      fontFamily: {
        heading: ['Recoleta', 'Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        main: '#1e293b',
        'main-dark': '#f8fafc',
        'bg-code-dark': '#2f3240',
        'bg-main-dark': '#282a36',
        'bg-nav-dark': '#323541',
        'bd-dark': '#3b3e54',
      },
    },
  },
  plugins: [],
}
