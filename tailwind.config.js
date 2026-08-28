const { colors: themeColors } = require("./src/config/colors.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        md2: "960px",
      },
      backgroundColor: {
        DEFAULT: themeColors.bg.primary,
        app: themeColors.bg.app,
        nav: themeColors.nav.default,
        "nav-thin": themeColors.nav.thin,
        "nav-mobile": themeColors.nav.mobile,
      },
      colors: {
        card: themeColors.bg.card,
        section: themeColors.bg.section,
        text: themeColors.text.primary,
        "text-muted": themeColors.text.muted,
        heading: themeColors.text.heading,
        primary: {
          DEFAULT: themeColors.primary.default,
          hover: themeColors.primary.hover,
          light: themeColors.primary.light,
          lighter: themeColors.primary.lighter,
        },
        "card-hover": themeColors.bg.cardHover,
      },
      spacing: {
        sm: "9px",
        md: "18px",
        lg: "27px",
        "section-py": "54px",
        "section-py-md": "36px",
        "section-py-sm": "24px",
        "section-my": "40px",
        "section-my-md": "24px",
        "section-my-sm": "16px",
        "container-px": "18px",
        "container-px-md": "16px",
        "container-px-sm": "12px",
        "gap-lg": "27px",
        "gap-md": "20px",
        "gap-sm": "16px",
      },
      borderRadius: {
        card: "8px",
      },
      fontFamily: {
        sans: ["Quicksand", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
