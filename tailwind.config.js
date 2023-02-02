/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        white: "#fff",
        black: "#000",
        blue: "#0B1347",
      },
      margin: {
        section: "80px",
        sectionMB: "40px",
      },
      spacing: {
        section: "80px",
        sectionMB: "50px",
      },
    },
  },
  plugins: [],
};
