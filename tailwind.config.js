/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-background": "#141414",
        "secondary-background": "#171819",
        header: "rgb(16 17 18 / 0.72)",
        "header-stroke": "rgb(224 238 252 / 0.15)",
        "main-green": "#19B345",
        "main-blue": "#4FB4E6",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
