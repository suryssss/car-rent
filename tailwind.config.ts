import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include all files in the `app` directory
    "./pages/**/*.{js,ts,jsx,tsx}", // Include all files in the `pages` directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include all files in the `components` directory
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Use CSS variables for colors
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"], // Use custom fonts
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;