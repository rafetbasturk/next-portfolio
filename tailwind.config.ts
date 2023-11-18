import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: {
          primary: {
            base: "#6750A4",
            onBase: "#FFFFFF",
            container: "#EADDFF",
            onContainer: "#21005D",
          },
          secondary: {
            base: "#625B71",
            onBase: "#FFFFFF",
            container: "#E8DEF8",
            onContainer: "#1D192B",
          },
          tertiary: {
            base: "#7D5260",
            onBase: "#FFFFFF",
            container: "#FFD8E4",
            onContainer: "#31111D",
          },
          error: {
            base: "#B3261E",
            onBase: "#FFFFFF",
            container: "#F9DEDC",
            onContainer: "#410E0B",
          },
          bg: {
            base: "#FFFBFE",
            onBase: "#FFFBFE",
          },
          outline: {
            base: "#79747E",
            container: "#E7E0EC",
            onContainer: "#49454F",
          },
        },
        dark: {
          primary: {
            base: "#D0BCFF",
            onBase: "#381E72",
            container: "#4F378B",
            onContainer: "#EADDFF",
          },
          secondary: {
            base: "#CCC2DC",
            onBase: "#332D41",
            container: "#4A4458",
            onContainer: "#E8DEF8",
          },
          tertiary: {
            base: "#EFB8C8",
            onBase: "#492532",
            container: "#633B48",
            onContainer: "#FFD8E4",
          },
          error: {
            base: "#F2B8B5",
            onBase: "#601410",
            container: "#8C1D18",
            onContainer: "#F9DEDC",
          },
          bg: {
            base: "#1C1B1F",
            onBase: "#E6E1E5",
          },
          outline: {
            base: "#79747E",
            container: "#49454F",
            onContainer: "#CAC4D0",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
