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
        primary: "#1A1A1A",
        secondary: "#CA1F26",
        accent: "#580D0E",
        text: "#ffffff",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)"],
      serif: ["var(--font-mirza)"],
      mono: ["var(--font-jacques_francois_shadow)"]
    },
  },
  plugins: [],
};
export default config;
