import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary100: "#C0ED54",
        primary200: "#DDF813",
        primary300: "#0B4221",
        primary400: "#033225",
        gray:"#F3F3FF",
        gray100: "#F1F2F1",
        gray200: "#E6E7E7",
        gray300: "#BABDBC",
        gray400: "#8E9492",
        gray500: "#676E6C",
        gray600: "#464848",
        dark: "#141615",
      },

      // Font custom
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
