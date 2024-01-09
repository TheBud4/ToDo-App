/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          textColor: "#f5f5f5",
          backGround: "#000000d9",
          modalBgColor: "#1f1f1f",
          primaryColor: "#f5f5f5",
        },
        default: {
          textColor: "#000000d9",
          backGround: "#f5f5f5",
          primaryColor: "#805ad5",
          secondaryColor: "#48bb78",
        },
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
