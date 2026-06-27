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
        // Zaydtex logo palette — light, premium. White / cream / beige base,
        // dark brown for type & footer, copper/orange for buttons & accents.
        brand: {
          // Copper / orange (from the logo) — buttons, links, small accents
          primary: "#BC7A2E",
          primaryDark: "#9C6322",
          primaryLight: "#D49A55",
          accent: "#C98A3C",
          accentDark: "#A06E22",
          // Dark brown (logo) — headings, footer, text
          ink: "#2E2117",
          charcoal: "#241910",
          graphite: "#3A2A1E",
          steel: "#4A3420",
          // Light surfaces
          cream: "#FBF7F1", // warm cream
          mist: "#F3ECE0", // very light beige
          bone: "#E7DBC9", // hairline borders
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
      boxShadow: {
        glow: "0 24px 60px -24px rgba(188,122,46,0.45)",
        soft: "0 30px 70px -40px rgba(46,33,23,0.30)",
        card: "0 28px 60px -34px rgba(46,33,23,0.22)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
