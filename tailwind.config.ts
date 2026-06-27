import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official Zaydtex palette — cream / copper / chocolate.
        brand: {
          // Primary — copper: buttons, links, icons, accents
          primary: "#B5742B",
          primaryDark: "#925A1E",
          primaryLight: "#D29A57",
          // Secondary — warm amber: highlights, glows, callouts
          accent: "#D08A2C",
          accentDark: "#A86E1F",
          // Dark surfaces — chocolate / espresso scale
          ink: "#1C140D",
          charcoal: "#241A11",
          graphite: "#30231A",
          steel: "#46331F",
          // Light surfaces — cream / bone
          cream: "#FAF6EF",
          mist: "#F5EFE6",
          bone: "#EADFCF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(181,116,43,0.22), transparent 70%)",
        "copper-glow":
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(208,138,44,0.16), transparent 70%)",
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(181,116,43,0.40)",
        accent: "0 20px 60px -20px rgba(208,138,44,0.38)",
        ink: "0 30px 80px -30px rgba(20,12,6,0.85)",
        card: "0 24px 60px -28px rgba(60,40,20,0.22)",
      },
      keyframes: {
        // Subtle copper thread travelling horizontally along a divider
        thread: {
          "0%": { transform: "translateX(-130%)" },
          "100%": { transform: "translateX(130%)" },
        },
        // Very slow textile-weave pan for dark backgrounds
        weave: {
          "0%": { backgroundPosition: "0px 0px" },
          "100%": { backgroundPosition: "56px 0px" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        thread: "thread 7s ease-in-out infinite",
        weave: "weave 50s linear infinite",
        float: "float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
