/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        "2s": "1fr 2fr;",
      },
    },
  },
  // @ts-ignore
  plugins: [require("daisyui"), [require("@tailwindcss/aspect-ratio")]],
};
