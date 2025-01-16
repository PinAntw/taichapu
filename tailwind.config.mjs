import { fontFamily } from "tailwindcss/defaultTheme";


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        maincolor:  "#FAFAF8",
        backgroundcolor: "#FAE9E1",
        maingreen: "#A5D6B3"
      },
      fontFamily: {
        sans: ["Geist", ...fontFamily.sans],
        mono: ["Geist_Mono", ...fontFamily.mono], 
        serif: ["Noto Serif TC", ...fontFamily.serif]
      },
    },
  },
  plugins: [],
};
