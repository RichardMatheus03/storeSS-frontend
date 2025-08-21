// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "tw-",   // 👈 aqui define o prefixo
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#c0fed3",
          200: "#96d3aa",
          300: "#6ba881",
          400: "#417c58",
          500: "#16512f"
        },
      },  
    },
  },
  plugins: [],
}