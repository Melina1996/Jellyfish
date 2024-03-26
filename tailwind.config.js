/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "banner": "url('./../../public/img/banner.jpg')",
      },
      keyframes: {
        slider:{
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          }
        },
        ping: {
          '0%': { opacity: 1 },
          '25%': { opacity: 0.75 },
          '50%':  { opacity: 0.5 },
          '75%': { opacity: 0.25 },
          '100%':  { opacity: 0 },
        },
      }, 
      animation: {
        "pingPing": 'ping 2s linear',
        "carousel": "slider 10s infinite linear",
      },
    },
  },
  plugins: [],
};
