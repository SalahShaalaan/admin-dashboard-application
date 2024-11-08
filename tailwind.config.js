/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgColor: "#F5F6FA",
        black: "#202224",
        blue: "#4880FF",
        darkBg: '#1b2431',
        SecDarkBg: "#273142",
        darkText: '#ededed',

      },
      gridTemplateColumns: {
        'auto-fit-250': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fit-350': 'repeat(auto-fit, minmax(350px, 1fr))',
      },
      spacing: {
        '20': '20px',
        '25': '25px',
      },
    },
  },
  plugins: [],
};
