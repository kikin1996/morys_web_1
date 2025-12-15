import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0b3b3a"
        },
        accent: {
          DEFAULT: "#d2a574"
        }
      }
    }
  },
  plugins: []
};

export default config;


