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
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        shiftingGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "400%": "400%",
      },
      animation: {
        gradient: "shiftingGradient 16s linear infinite",
      },
    },
  },
  plugins: [],
};
