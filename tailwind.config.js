/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#EDE6D8",
        "sand-deep": "#E2D8C5",
        "sand-light": "#F5F0E6",
        olive: "#6B7A52",
        "olive-deep": "#4A5639",
        "olive-soft": "#DCE3CC",
        coral: "#E08963",
        "coral-deep": "#C46A45",
        "coral-soft": "#F2C9B3",
        ink: "#3A3A32",
        "ink-soft": "#5E5E52",
        "ink-muted": "#8A8A7C",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(74, 86, 57, 0.08)",
        "soft-lg": "0 12px 40px rgba(74, 86, 57, 0.12)",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1) translateY(0)" },
          "50%": { opacity: "0.35", transform: "scale(1.06) translateY(-12px)" },
        },
      },
      animation: {
        breathe: "breathe 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
