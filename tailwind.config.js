/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'iw-primary': '#000000',     // Black
        'iw-secondary': '#111111',   // Darker Grey (for card backgrounds)
        'iw-accent-orange': '#f46b16', // Vibrant Orange
        'iw-text-primary': '#ffffff',  // White
        'iw-text-secondary': '#a0a0a0', // Muted Grey
      },
    },
  },
  plugins: [],
};