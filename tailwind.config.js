/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "ui-system"],
      },
      colors: {
        primary: "#282938",
        secondary: "#ECECF1",
        "secondary-blue": "#EEF4FA",
        "dark-blue": "#1C1E53",
        "royal-blue": "#2405F2",
        yellow: "#FCD980",
      },
    },
  },
  plugins: [],
};
