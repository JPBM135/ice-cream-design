/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bg_color: "#ffe4af",
        bg_color_secondary: "#947a51",
        bg_color_tertiary: "#976c29",
        paragraph_color: "#231f20",
        paragraph_color_secondary: "#222221",
        primary: "#c74664",
        secondary: "#a8e9d6",
      }
    },
  },
  plugins: [],
}
