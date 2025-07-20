// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        // ... (keep your existing 'neon-box-glow' shadow) ...
        "neon-box-glow":
          "0 0 15px rgba(0, 184, 135, 0.8), 0 0 30px rgba(0, 184, 135, 0.4), 0 10px 20px rgba(0, 0, 0, 0.4)",
      },
      keyframes: {
        // ... (keep your existing 'glow-pulse' keyframe for the Upload Doc button) ...
        "glow-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 5px rgba(0, 184, 135, 0.7), 0 0 15px rgba(0, 184, 135, 0.4), inset 0 0 5px rgba(0, 184, 135, 0.2)",
          },
          "50%": {
            boxShadow:
              "0 0 10px rgba(0, 184, 135, 0.9), 0 0 25px rgba(0, 184, 135, 0.6), inset 0 0 10px rgba(0, 184, 135, 0.3)",
          },
        },
        // New keyframe for the neon shimmer/light sweep effect
        "neon-shimmer-sweep": {
          "0%": { transform: "translateX(-100%) skewX(-30deg)" }, // Start off-screen left, angled
          "100%": { transform: "translateX(200%) skewX(-30deg)" }, // End far off-screen right, angled
        },
      },
      animation: {
        // ... (keep your existing 'button-glow-pulse' animation) ...
        "button-glow-pulse": "glow-pulse 2s infinite alternate ease-in-out",
        // New animation utility for the neon shimmer
        "neon-shimmer": "neon-shimmer-sweep 2.5s infinite linear", // 2.5s duration, continuous, even speed
      },
    },
  },
  plugins: [],
};
