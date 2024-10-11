import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#212529",
        secondary: "#DEE2E6",
        accent: "#6C757D",
        text: "#212529",
        background: "#F8F9FA",
      },
      fontFamily: {
        primary: ["Playfair Display", 'sans'],
        secondary: ["Protest Strike", 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
