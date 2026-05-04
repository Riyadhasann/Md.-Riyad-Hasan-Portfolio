export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#111827",
        accent: "#38bdf8",
        roseAccent: "#AB485B",
        softText: "#cbd5e1"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 45px rgba(15, 23, 42, 0.25)"
      }
    }
  },
  plugins: []
};