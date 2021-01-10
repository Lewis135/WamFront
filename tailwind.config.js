module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      canela: ['Canela', 'sans-serif'],
      fort: ['Fort', 'sans-serif'],
    },  
    extend: {
      colors: {
        black: "#111111",
        darkGray: "#363636",
        red: "#e62e2d",
        darkRed: "#c52132"
      },        
      height: {
        'screen-15' : '15vh',
        'screen-25' : '25vh', 
        'screen-60' : '60vh', 
        'screen-75' : '75vh'
      },
      
      minHeight: {
        'screen-15' : '15vh',
        'screen-25' : '25vh', 
        'screen-60' : '60vh',
        'screen-75' : '75vh'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
