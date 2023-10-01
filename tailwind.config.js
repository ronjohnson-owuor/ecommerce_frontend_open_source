/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NotoSansNabataean: ['Noto Sans Nabataean', 'cursive'],
      },
      colors:{
        transparent:'transparent',
        primary:'#EA4E0B',
        primary2:'#F78B00',
        background:'#1F2937',
        overlay: '#1F2937',
        color:'#6B7280'
      },
      width:{
        btn_w:'100px',
      }
    },
  },
  plugins: [],
}

