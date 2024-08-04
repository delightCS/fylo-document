/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      screens: {
        xs: "505px",
      },
      colors: {
        primary: {
          100: "hsl(322, 100%, 66%)",
          200: "hsl(193, 100%, 96%)",
          300: "hsl(192, 100%, 9%)",
          400: "hsl(208, 11%, 55%)",
        },
        secondary: {
          100: "hsl(322, 100%, 80%)",
        },
      },
      fontFamily: {
        heading: ["Poppins"],
        body: ["Open Sans"],
      },
      backgroundImage: {
        "svg-desktop-image": "url(images/bg-hero-desktop.svg)",
        "svg-mobile-image": "url(images/bg-hero-mobile.svg)",
      },
      boxShadow: {
        full: "2px 2px 6px -1px rgb(0 0 0 / 0.1), -2px -2px 4px -2px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
