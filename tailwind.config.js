module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': 'Martel Sans, sans-serif',
        'title': 'Merriweather',
        
       },
 
       container: {
         center: true,
         padding: '15px',
         
         screens: {
           lg: "1280px"
         }
       },

       height: {
        hero: '600px',
       },

       colors: {

        black:{
          DEFAULT: '#5C5C5C',
          dark: '#202127',
        },

        primary:{
          DEFAULT: '#10B7CE',
        },

        blue:{
          light: '#00A3BA',
          dark: '#5C7FE5',
          mid: '#5865A0'
        },

        red:{
          DEFAULT: '#E7585D',
        },

        gray:{
          light: '#F7F9FC',
          body: '#F7F9FC',
          dark: '#d5d5d5',
          mid: '#f2f2f2',
          
        },
        
    },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

  purge: {
    mode : 'layers',
    content: ['*.html'],
  }
}
