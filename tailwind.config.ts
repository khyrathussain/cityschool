import type { Config } from 'tailwindcss';
export default { content:['./app/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'], theme:{extend:{colors:{navy:'#0b1f3a',ink:'#102a43',gold:'#d8a739',cream:'#f7f5f0',mist:'#eef3f7'},fontFamily:{sans:['Arial','sans-serif'],serif:['Georgia','serif']},boxShadow:{soft:'0 16px 45px rgba(15,42,67,.10)'}}},plugins:[]} satisfies Config;
