// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        custom850: "850px",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        flicker: 'flicker 2s linear infinite',
        float: 'float 6s ease-in-out infinite',
        float8: 'float 8s ease-in-out infinite',
        float9: 'float 9s ease-in-out infinite',
        float10: 'float 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
