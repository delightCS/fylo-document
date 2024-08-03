/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "hsl(322, 100%, 66%)",
          200: "hsl(193, 100%, 96%)",
          300: "hsl(192, 100%, 9%)",
          400: "hsl(208, 11%, 55%)",
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
    },
  },
  plugins: [],
};
