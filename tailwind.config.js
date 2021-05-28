const { Translate } = require("@material-ui/icons");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "noto-scans": ["Noto Sans TC"],
        inter: ["Inter"],
      },
      inset: {
        "1/20": "5%",
        "2/5": "40%",
      },
      spacing: {
        "90vw": "90vw",
      },
      zIndex: {
        "-10": "-10",
      },
      gridTemplateColumns: {
        content: "minmax(260px, 1fr) 1fr 1fr minmax(220px, 1fr)",
      },
      gridTemplateRows: {
        content: "minmax(328px, auto) minmax(328px, auto) minmax(328px, auto)",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        dropIn: "dropIn 1s ease-in forwards",
        dropUp: "dropUp 0.5s linear forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        dropIn: {
          "0%, 20%": { transform: "translateY(-10%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        dropUp: {
          "0%": { transform: "translateY(0)", opacity: 0 },
          "100%": { transform: "translateY(-10%)", opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
