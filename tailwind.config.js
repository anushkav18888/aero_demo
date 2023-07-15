/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: "Poppins",
        titleFont: "Montserrat",
      },
      colors: {
        primaryColor: "#F3F4F6",
        secondaryColor: "#9b59b6",
        bgColor: "#34495e",
      },
      boxShadow: {
        btnShadow: "0px 0px 18px 3px rgba(52,73,94,1)",
      },
    },
  },
  plugins: [],
};
