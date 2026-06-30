/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Keeps track via next-themes orchestration framework
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pageBg: "var(--page-bg)",
        cardBg: "var(--card-bg)",
        cardBgHover: "var(--card-bg-hover)",
        nav: "var(--nav-bg)",
        dropdown: "var(--dropdown-bg)",
        brandBorder: "var(--border-color)",
        accent: "var(--accent-color)",
        accentHover: "var(--accent-hover)",
        textMain: "var(--text-main)",
        textMuted: "var(--text-muted)",
        textSubtle: "var(--text-subtle)",
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      }
    },
  },
  plugins: [],
}