/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        'sm':'480px',
        'md':'960px',
        'lg':'1200px',
      },
      colors: {
        primaryColor:'#010d60',
        primaryColorLight:'#010d78',
        secondaryColor:'#FFFF00',
        paragraphColor:'#c0c0c0',
        whiteColor:'#fff',
        blackColor:'#000',
        greenColor:'#007936',
        orangeColor: '#f6ad55',
        redColor:'#cc3433',
        darkColor:'#000',
        blobColor:'#23AD5F',
        darkColorLight:'#171717',
        violetColor:'#8F00FF'
      }
    },
    container: {
      center:true,
      padding:{
        DEFAULT:'20px',
        md:'50px'
      }
    },
    fontFamily: {
      oswald:['Oswald', 'san-serif'],
      nunito:['Nunito', 'sans'],
      roboto:['Roboto', 'sans']
    }
  },
  plugins: [],
}

