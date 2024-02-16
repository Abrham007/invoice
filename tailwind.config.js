/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      1: "#7C5DFA",
      2: "#9277FF",
      3: "#1E2139",
      4: "#252945",
      5: "#DFE3FA",
      6: "#888EB0",
      7: "#7E88C3",
      8: "#0C0E16",
      9: "#EC5757",
      10: "#FF9797",
      11: "#F8F8FB",
      12: "#141625",
      white: "#fff",
    },
    fontSize: {
      xl: [
        "2.25rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-0.07031rem",
          fontWeight: "bold",
        },
      ],

      lg: [
        "1.5rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "-0.04688",
          fontWeight: "bold",
        },
      ],

      base: [
        "0.9375rem",
        {
          lineHeight: "0.9375rem",
          letterSpacing: "-0.01563",
          fontWeight: "bold",
        },
      ],

      sm: [
        "0.8125rem",
        {
          lineHeight: "0.9375rem",
          letterSpacing: "-0.00625rem",
          fontWeight: "medium",
        },
      ],
    },
    boxShadow: {
      DEFAULT: "0px 10px 10px -10px rgba(72, 84, 159, 0.10)",
      lg: "0px 10px 20px 0px rgba(72, 84, 159, 0.25)",
    },

    extend: {
      backgroundImage: {
        checkIcon: "url('./assets/icon-check.svg')",
      },
      lineHeight: {
        4.5: "1.125rem",
      },
    },
  },
  plugins: [],
};
