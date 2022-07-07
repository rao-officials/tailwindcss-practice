/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        image1: "url('./src/assets/images/1.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      animation: {
        tilt: "tilt 10s infinite linear",
        tiltTwo: "tiltTwo 100s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(-5deg)",
          },
          "25%": {
            transform: "rotate(4deg)",
          },
          "75%": {
            transform: "rotate(5deg)",
          },
        },
        tiltTwo: {
          
          "0%" :{
            transform: "rotate(0deg)",
          },

          "25%": {
            transform: "rotate(95deg)",
          },

          "50%": {
            transform: "rotate(195deg)",
          },

          "75%": {
            transform: "rotate(285deg)",
          },

          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
