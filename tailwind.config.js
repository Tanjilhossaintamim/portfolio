/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#854CE6",
        background1: "#222A35",
        button: "#854CE6",
        background2: "#19212C",
        text: "#C8CFD8",
        text1: "#F2F5F7",
        text2: "#626970",
        text3: "#575C66",
        footerBackground: "#00012B",
        bg: "#1C1C27",
        bgLight: "#1C1E27",
        primary: "#854CE6",
        text_primary: "#F2F3F4",
        text_secondary: "#b1b2b3",
        card: "#171721",
        card_light: "#191924",
        button: "#854CE6",
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
