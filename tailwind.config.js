/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx", "./index.tsx", "./components/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        encre: '#0B2A3A',
        encreDeep: '#071D29',
        encreCard: '#123A4D',
        papier: '#F3EEE6',
        blanc: '#FFFFFF',
        citron: '#3FC6D9',
        vertProfond: '#0B6E7D',
        texteClair: '#0B2A3A',
        texteClairSec: '#5B6B73',
        texteSombre: '#F3EEE6',
        texteSombreSec: '#A9C1CB',
        bordureClair: '#E2D9CB',
        bordureSombre: 'rgba(63, 198, 217, 0.18)',
        sable: '#D9C6A5',
        eau: '#7FDCE8',
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
