const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,css}", // Add the existing content patterns
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});

