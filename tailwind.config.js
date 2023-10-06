/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#FFC01F",
        textColor:"#353535",
      },
    },
  },
  plugins: [],
};
