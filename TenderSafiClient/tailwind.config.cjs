/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
    screens: {
      xxs: "320px",
      // => @media (min-width: 320px) { ... }

      xsm: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'primary-color': '#1F1C9B',
      'secondary-color': '#FE873F',
      'secondary-darker': '#061835',
      'white': '#fff',
      'green': '#17A625',
      'orange': '#FFA500',
      'gray':'#dddddd'

    },
  },

  plugins: [],
};
