import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0b1f3a",
          light: "#123a63",
          accent: "#3dd6d0",
          glow: "#9d7bff",
          sun: "#f7b733",
        },
        night: "#050b16",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 60px rgba(13, 59, 102, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
