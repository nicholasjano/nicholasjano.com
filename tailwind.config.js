/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          primary: "#141414",
          secondary: "#171819",
        },
        header: {
          primary: "rgb(16 17 18 / 0.72)",
          stroke: "rgb(224 238 252 / 0.15)",
        },
        brand: {
          green: "#19B345",
          blue: "#4FB4E6",
        },
        type: {
          primary: "#EBEBEB",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
