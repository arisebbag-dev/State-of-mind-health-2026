/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Therapeutic Calm Palette
        canvas: '#F5F3EF',      // Warm cream background
        slate: '#5B7C99',       // Primary soft blue
        'slate-deep': '#3D5569',
        'slate-soft': '#E3E8F0',
        sage: '#7BA384',        // Secondary sage green
        'sage-deep': '#5A7A62',
        'sage-soft': '#E8EFE7',
        accent: '#F0E6D2',      // Warm accent
        ink: '#2D3E4A',         // Deep blue-gray text
        'ink-soft': '#5A6B77',
        'ink-muted': '#8A9AA5',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        serif: '"Crimson Text", serif',
      },
      borderRadius: {
        'xl2': '16px',
        'xl3': '20px',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      boxShadow: {
        card: '0 4px 16px rgba(91, 124, 153, 0.08)',
        'card-hover': '0 8px 24px rgba(91, 124, 153, 0.12)',
      },
    },
  },
  plugins: [],
};
