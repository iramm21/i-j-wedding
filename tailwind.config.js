// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7d9883", // Eucalyptus for primary buttons and highlights
        primaryDark: "#465c47", // Eucalyptus for primary buttons and highlights
        secondary: "#FFFFFF", // White for text on dark backgrounds
        accent: "#E1E8ED", // Light gray for subtle background accents
        dark: "#2C3E50", // Dark blue
        light: "#ECF0F1", // Very light gray for backgrounds
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Main font for the site
        serif: ["Merriweather", "serif"], // A serif font for accents and quotes
      },
      fontSize: {
        "5xl": "3rem", // 48px
        "7xl": "4.5rem", // 72px
        lg: "1.125rem", // 18px
        "2xl": "1.5rem", // 24px
      },
      spacing: {
        72: "18rem", // 288px for large elements
      },
      borderRadius: {
        xl: "1.5rem", // Larger border radius for a more modern look
      },
      boxShadow: {
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // Soft shadow for buttons and cards
      },
    },
  },
  plugins: [],
};
