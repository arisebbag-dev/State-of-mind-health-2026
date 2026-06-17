/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm canvas background
        canvas: "#FAF7F1",
        // Deep healing forest green — primary / trust
        forest: {
          DEFAULT: "#2C5545",
          deep: "#1F3D31",
          soft: "#3D6B58",
        },
        // Muted sage
        sage: {
          DEFAULT: "#6E9080",
          mist: "#E7EFE9",
          deep: "#52715F",
        },
        // Deep slate ink for text
        ink: {
          DEFAULT: "#1E2A26",
          soft: "#475850",
          muted: "#6B7A73",
        },
        // Warm apricot — used sparingly for highlights & glow
        apricot: {
          DEFAULT: "#E0915E",
          soft: "#F0C7A6",
          deep: "#C87844",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
        prose: "44rem",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      boxShadow: {
        soft: "0 18px 50px -20px rgba(31, 61, 49, 0.25)",
        card: "0 10px 30px -16px rgba(31, 61, 49, 0.18)",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.55" },
          "50%": { transform: "scale(1.12)", opacity: "0.8" },
        },
      },
      animation: {
        breathe: "breathe 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
