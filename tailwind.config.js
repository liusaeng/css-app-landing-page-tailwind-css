/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      // ใช้ namespace `brand` — dev แต่คนเพิ่ม key ใหม่ภายใต้ brand เท่านั้น ลด merge conflict
      colors: {
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
