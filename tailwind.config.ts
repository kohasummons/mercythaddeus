import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
      },
      backgroundImage: {
        'billa-gradient-black': 'linear-gradient(180deg, #1a1a1a 30%, #404040 100%)',
      },
    },
    animation: {
      "heart-move": "heart-move 6s linear infinite",
    },
    keyframes: {
      "heart-move": {
        from: {
          transform: "translateX(0) translateY(0)",
        },
        to: {
          transform: "translateX(83px) translateY(107px)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;