import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  content: ["content/**/*.md"],
  theme: {
    container: {
      padding: "1rem",
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
