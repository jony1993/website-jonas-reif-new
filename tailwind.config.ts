import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  content: ["content/**/*.md"],
  darkMode: "class",
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        default: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#0b011d",
      },
    },
  },
};
