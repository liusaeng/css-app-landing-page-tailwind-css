/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "feature-surface-1": "#eff6ff",
        "feature-surface-2": "#eef2ff",
        "feature-surface-3": "#faf5ff",
        brand: {
          bg: "#f8fafc",
          surface: "#ffffff",
          primary: "#4f46e5",
          "primary-soft": "#e0e7ff",
          heading: "#0f172a",
          body: "#64748b",
          cta: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
