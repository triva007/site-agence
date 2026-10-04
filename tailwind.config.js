/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        encre: '#0E2B26',
        encreDeep: '#0A1F1B',
        encreCard: '#16413A',
        papier: '#F6F5EF',
        blanc: '#FFFFFF',
        citron: '#DDF594',
        vertProfond: '#007E70',
        texteClair: '#133833',
        texteClairSec: '#5D726C',
        texteSombre: '#F6F5EF',
        texteSombreSec: '#9FB5AD',
        bordureClair: '#D7E0D7',
        bordureSombre: 'rgba(221, 245, 148, 0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        widestLogo: '0.35em',
      },
      borderRadius: {
        '24': '24px',
      }
    },
  },
  plugins: [],
}
