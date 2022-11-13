/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#0e0805",
      beige: "#cdb38f",
      lightbeige: "#e9ddc8",
      darkbeige: "#a28769",
      cwhite: "#FAEDF0",
      transparent: "rgba(0,0,0,0)",
      white: "#FFFFFF",
    },
    extend: {
      keyframes: {
        heroanimation: {
          "0%": { opacity: "0", transform: "translate3d(0, 120%, 0)" },
          "100%": {
            opacity: "1",
            transform: "translate3d(0)",
          },
        },
      },
    },
    fontFamily: {
      roman: ["Playfair Display", "serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  important: true,
};
