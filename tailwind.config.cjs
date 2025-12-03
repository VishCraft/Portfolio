
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme:{
    extend:{
      colors:{
        techred:'#d14b4b',
        techgreen:'#3c8f6e',
        techblue:'#4c81c9',
        lightbg:'#fafafa'
      },
      boxShadow:{
        card:'0 4px 24px rgba(0,0,0,0.08)'
      },
      borderRadius:{
        smooth:'1.25rem'
      }
    }
  },
  plugins:[]
}
