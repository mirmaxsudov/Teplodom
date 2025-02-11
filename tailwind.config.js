/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        lg: "1000px",
        xl: "1100px",
        "2xl": "1300px",
      },
    },
  },
  plugins: [],
};
