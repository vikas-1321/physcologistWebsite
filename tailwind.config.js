// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}',
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        custom850: "850px",
      },
      keyframes: {
         fadeQuotes: {
          '0%, 25%': { opacity: '1' },
          '33%, 100%': { opacity: '0' }
        },
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
         fadeQuotes: 'fadeQuotes 9s infinite',
      },
    },
  },
  plugins: [],
};
