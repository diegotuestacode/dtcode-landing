import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colorPrimary : "var(--color-primary)",
        colorBlack1: "var(--color-black-1)",
        colorBlack2: "var(--color-black-200)",
        colorBlack3: "var(--color-black-300)"
      },
      fontFamily:{
        inter: ['Inter']
      }
    },
  },
  plugins: [],
};
export default config;
