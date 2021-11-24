module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        reddit: {
          light: "#272729",
          DEFAULT: "#1A1A1B",
          dark: "#030303",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
