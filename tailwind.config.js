const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        "light-blue": colors.lightBlue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
