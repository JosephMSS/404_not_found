module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Inconsolata: ["Inconsolata"],
      SpaceMono: ["Space Mono"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
