/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['roboto', 'cursive'],
      },
      colors:{
        transparent:'transparent',
        primary:'#8B008B',
        primary2:'#710193',
        background:'#FFF',
        overlay: '#eee',
        color:'#A9A9A9'
      },
      width:{
        btn_w:'100px',
      }
    },
  },
  plugins: [],
}

