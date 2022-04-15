module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: { 400: "#FCA61F" },
      },
      fontFamily: {
        lora: "'Lora', serif",
      },
    },
  },
  plugins: [],
};
