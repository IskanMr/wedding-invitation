module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#81A0CD",
        white: "#FFFFFF",
        black: "#3F4254",
        green: "#355453",
      },
      fontSize: {
        title: [
          "1.45rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "600",
          },
        ],
        subtitle: [
          "1.25rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "600",
          },
        ],
        body: [
          "0.875rem",
          {
            lineHeight: "1rem",
            fontWeight: "400",
          },
        ],
        small: [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "400",
          },
        ],
        vsmall: [
          "0.65rem",
          {
            lineHeight: "0.9rem",
            fontWeight: "400",
          },
        ],
      },
      fontFamily: {
        body: ["Argent", "sans-serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: "50%" },
          "100%": { opacity: "100%" },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
