/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
      righteous: ["Righteous", "cursive"],
    },
  },
  plugins: [
    require("tailwind-typewriter")({
      wordsets: {
        skill: {
          words: ["Web Developer", "Information Student", "Tech Enthusiast"],
          isDeleting: false,
        },
      },
    }),
  ],
};
