/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#FFC01F",
        textColor: "#353535",
        textHover: "#FFC01F",
        textHeadColor:"#596C72",
      },
      boxShadow:{
        boxShadow:"0px 0px 7px 0px rgba(149, 149, 149, 0.25)"
      }
    },
  },
  plugins: [],
};
