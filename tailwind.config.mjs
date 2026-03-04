/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        'term-bg':     '#050912',
        'term-dim':    '#0B1124',
        'term-text':   '#BDD8E6',
        'term-bright': '#E8F4FF',
        'term-cyan':   '#4FC3F7',
        'term-muted':  '#7BAABB',
        'term-border': '#0D2C3A',
        'term-pink':   '#FF79C6',
        'term-purple': '#BD93F9',
        'term-yellow': '#F1FA8C',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [typography],
};
