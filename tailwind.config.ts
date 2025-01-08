/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4F46E5',
        'secondary': '#818CF8',
        'background': '#0F172A',
        'card': '#1E293B',
      },
      backgroundImage: {
        'linkly-gradient': 'linear-gradient(to right, #A855F7, #3B82F6)',
        'headline-gradient': 'linear-gradient(to right, #EC4899, #3B82F6)',
      },
    },
  },
  plugins: [],
}
