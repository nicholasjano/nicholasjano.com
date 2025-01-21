/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          primary: "#141414",
          secondary: "#1E1E1E",
          stats: "#0A0A0A",
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
