import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        matte: "#0a0a0a",
        neonCyan: "#00f5ff",
        neonMagenta: "#ff2dd1",
        electricBlue: "#3b82ff",
      },
      boxShadow: {
        neon: "0 0 16px rgba(0,245,255,0.35), 0 0 28px rgba(255,45,209,0.2)",
        card: "0 12px 40px rgba(0, 0, 0, 0.55)",
      },
      backgroundImage: {
        "neon-gradient": "radial-gradient(circle at 20% 20%, rgba(0,245,255,0.2), transparent 35%), radial-gradient(circle at 80% 0%, rgba(59,130,255,0.2), transparent 40%), radial-gradient(circle at 50% 100%, rgba(255,45,209,0.16), transparent 35%)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.03)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
