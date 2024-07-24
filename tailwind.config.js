/** @type {import(tailwindcss).Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        success: '#23CF9B',
        error: '#EB2D5B',
        'mint-green': '#D2E3C8',
        'forest-green': '#4F6F52',
        dark: '#4B4747',
        'slate-blue': '#6C6BAF',
        'pale-mint-green': '#DBFFCE',
        subtitle: '#4B4747',
        'light-lavendar': '#E2BBE9',
        'deep-navy': '#444B79',
        'soft-blue': '#6C6BAF',
        title: '#313131',
      },
    },
  },
  plugins: [],
};
