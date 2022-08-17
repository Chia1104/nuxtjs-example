/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './assets/**/*.scss',
    './assets/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(248,28,229,0.65)",
        secondary: "#4bf4e0",
        success: "#4caf50",
        info: "#2196f3",
        warning: "#ff9800",
        danger: "#f44336",
        light: "#fafafa",
        dark: "#212121",
        white: "#ffffff",
        black: "#000000",
        code: "#24292e",
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
  darkMode: 'class',
};
