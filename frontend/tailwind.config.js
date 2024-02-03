/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      colors: {
        purple: "#490057",
        LightPurple: "#A303A0",
        black: "#000000",
        orange: "#FBB03B",
        gray: "#999DAA",

        pink: {
          200: "#EF476F",
        },

        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          100: "#AFB2BF",
          200: "#999DAA",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },
        
      },
      
    },
  },
  plugins: [],
}

