import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enables dark mode with class
  theme: {
    extend: {
      colors: {
         primary: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
          light: "var(--primary-light)",
          lighter: "var(--primary-lighter)",
        },
        background: "var(--background)",
        card: "var(--card-bg)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
        neutral: "var(--neutral)",
        
        foreground: "var(--foreground)",     
        vsSky: "#C3EBFA",
        vsSkyLight: "#EDF9FD",
        vsPurple: "#CFCEFF",
        vsPurpleLight: "#F1F0FF",
       
      },
    },
  },
  plugins: [],
} satisfies Config;


