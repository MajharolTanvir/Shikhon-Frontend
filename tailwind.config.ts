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
        primary: "#1976D2",
        secondary: "#42A5F5",
        accent: "#90CAF9",
        text: "#BBDEFB",
        background: "#E3F2FD",
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
