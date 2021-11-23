module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        reddit: {
          light: "#1a1a1b",
          DEFAULT: "#272729",
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
