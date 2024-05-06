/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#292A29',
          secondary: '#1F2E30',
          tertiary: '#27181F',
          quaternary: '#332521',
          quinary: '#292523',
        },
        light: {
          primary: '#FFEEDB',
          secondary: '#61C9A8',
          tertiary: '#BA3B46',
          quaternary: '#ED9B40',
          quinary: '#AA8F66',
        },
      },
    },
  },
  plugins: [],
}

