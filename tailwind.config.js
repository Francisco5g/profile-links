/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      black100: "#111111",
      white: "#FFFFFF",
      gray: "#888888",
      gray100: "#333",
      transparent: "transparent",
      blue: "#12A2E9",
      pink: "#D946EF",
      github: "#161B22",
    },
    textColor: {
      white: "#FFFFFF",
      normal: "#FFFFFF",
      weak: "#888888",
      transparent: "transparent",
      blue: "#12A2E9",
      pink: "#D946EF",
      black: "#000000",
      red: "#CD5C5C",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        instagram: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
        gradient: "linear-gradient(to right, #12A2E9, #D946EF)",
      },
      boxShadow: {
        normal: "0 0 0 1px #333",
        box: "2px 8px 15px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
