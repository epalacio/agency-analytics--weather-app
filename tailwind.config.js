module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ebonyClay': '#333339',
        'malibu': '#5fb0e8',
        'zumthor': '#eef6fb',
        'white': '#ffffff',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'teko': ['Teko', 'sans-serif'],
      },
      maxWidth: {
        'weatherImg': '70px',
        'smallWeatherImg': '40px',
        'loader': '50px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
