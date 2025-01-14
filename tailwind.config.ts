import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "color-1000": "#151619",
        "color-900": "#1d1F22",
        "color-800": "#2B2D31",
        "color-700": "#35393F",
        "color-600": "#5A6069",
        "color-500": "#7c8187",
        "color-400": "#c1c4cb",
        "color-300": "#E4e4e4",
        "color-200": "#F5f5f5",
        "color-100": "#FFFFFF",
        orange: "#E46643",
        "orange-hover": "#F39765"
      },
      screens: {
        desktop: "1440px",
        tablet: "768px",
        phone: "375px"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        slab: ["Roboto Slab", "serif"],
        mono: ["Roboto Mono", "monospace"]
      }
    }
  },
  plugins: []
} satisfies Config;
