/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-light': '#93c5fd', // Define light primary color
        'primary-dark': '#1e40af', // Define dark primary color
        'secondary-light': '#34d399',
        'secondary-dark': '#047857',
        background: 'var(--color-background)', // Use CSS variables for dynamic theming
        foreground: 'var(--color-foreground)',
      },
    },
  },
  plugins: [],
};
