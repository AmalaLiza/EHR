import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "0px -4px 24px 0px #00000026",
        "3xl": "0px 0px 4px 0px rgba(0, 0, 0, 0.20)",
      },
      colors: {
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-tertiary": "var(--color-text-tertiary)",
        "text-quaternary": "var(--color-text-quaternary)",
        "text-inverted": "var(--color-text-inverted)",
        "text-positive": "var(--color-text-positive)",
        "text-negative": "var(--color-text-negative)",
        "text-primary-link": "var(--color-text-primary-link)",
        "text-visited-link": "var(--color-text-visited-link)",
        "text-primary-link-inverted": "var(--color-text-primary-link-inverted)",
        "text-secondary-link": "var(--color-text-secondary-link)",
        "text-inactive-tabbar": "var(--color-text-inactive-tabbar)",
        "text-link": "var(--color-text-link)",
        "text-tooltip": "var(--color-text-tooltip)",

        "background-primary": "var(--color-background-primary)",
        "background-secondary": "var(--color-background-secondary)",
        "background-disabled": "var(--color-background-disabled)",
        "background-tertiary": "var(--color-background-tertiary)",
        "background-quaternary": "var(--color-background-quaternary)",
        "background-slider": "var(--color-background-slider)",
        "background-primary-elevated":
          "var(--color-background-primary-elevated)",
        "background-hover": "var(--color-background-hover)",
        "background-stroke-disabled": "var(--color-background-stroke-disabled)",

        "border-primary": "var(--color-border-primary)",
        "border-secondary": "var(--color-border-secondary)",
        "border-tertiary": "var(--color-border-tertiary)",

        "control-primary": "var(--color-control-primary)",
        "control-secondary": "var(--color-control-secondary)",
        "control-tertiary": "var(--color-control-tertiary)",
        "accent-primary": "var(--color-accent-primary)",
        "accent-secondary": "var(--color-accent-secondary)",
        "brand-primary": "var(--color-brand-primary)",

        "icons-tertiary": "var(--color-icons-tertiary)",

        warning: "var(--color-warning)",
        negative: "var(--color-negative)",
        "visited-link": "var(--color-visited-link)",
        "gradient-start": "var(--color-gradient-start)",
        "gradient-mid": "var(--color-gradient-mid)",
        "gradient-end": "var(--color-gradient-end)",
        black: "#000000",
        "blue-custom": "#4561DC",
        themeWhite: {
          100: "#F2F3F7",
        },
        themeGray: {
          50: "#D8D8D8",
          100: "#9195AA",
          200: "#E6E7F1",
          300: "#D7D7D7",
          400: "#F0F1F6",
          500: "#D9D9D9",
          600: "#A5A5A5",
          700: "#F4F4F4",
          800: "#8D969F",
          900: "#626C7740",
        },
        themeBlack: {
          50: "#0C1132",
          100: "#1F2128",
          200: "#1A1D21",
          300: "#1D2023",
          500: " #242731",
          600: "#2C3135",
        },
        themeBlue: {
          50: "#2E3FD6",
          100: "#405ADB",
          200: "#86C1F0",
          400: "#131546",
          500: "#4561DC",
          600: "#435EDC",
        },
        themeLightBlue: {
          50: "#E7EEFE",
          100: "#86C1F0",
        },
        themePurple: {
          100: "#6366F1",
        },
        themeGreen: {
          100: "#6BC932",
        },
        themePink: {
          100: "#F5E0FF",
        },
      },
      backgroundImage: {
        blue: "linear-gradient(118deg, #86C1F0 3.03%, #2E3FD6 99.38%)",
        orange: "linear-gradient(90deg, #F9B035 0%, #F98C4E 53%, #F96767 100%)",
        purple: "linear-gradient(90deg, #CF8D7C 1.95%, #A77CB4 57.65%)",
        brand:
          "linear-gradient(299deg, #40359F 5.4%, #6B92C4 61.72%, #75B9EA 98.5%)",
      },
    },
  },
  plugins: [typography],
};

export default config;
