/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
const { screens } = defaultTheme

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "520px",
      ...screens,
    },
    extend: {
      screens: {
        "xs-wh": { raw: "(min-width: 540px) and (min-height: 540px)" },
        "navmenu-xs": { raw: "(min-height: 410px)" },
        "stats-cols": {
          raw: "(min-width: 764px) or ((min-width: 579px) and (max-height: 530px))",
        },
        "stats-xs": {
          raw: "(min-width: 301px) and ((min-height: 560px) or ((min-width: 453px) and (min-height: 500px)) or ((min-width: 579px) and (min-height: 350px)))",
        },
        "about-xs": { raw: "(min-width: 420px) and (min-height: 420px)" },
      },
      colors: {
        surface: {
          primary: "#141414",
          secondary: "#1E1E1E",
          tertiary: "#282828",
          dark: "#0A0A0A",
        },
        header: {
          primary: "rgb(20 20 20 / 0.75)",
          stroke: "rgb(127 127 127 / 0.15)",
        },
        brand: {
          green: "#19B345",
          blue: "#4FB4E6",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "symbols-gradient":
          "radial-gradient(circle at center, theme(colors.surface.secondary) 0%, theme(colors.surface.primary) 70.71%)",
      },
      keyframes: {
        shiftingGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        fadeScale: {
          "0%": {
            opacity: "0",
            transform: "translate(-50%, -50%) scale(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
      },
      backgroundSize: {
        "400%": "400%",
      },
      animation: {
        gradient: "shiftingGradient 16s linear infinite",
        fadeScale: "fadeScale 0.9s ease-out forwards",
      },
    },
  },
  plugins: [],
};
