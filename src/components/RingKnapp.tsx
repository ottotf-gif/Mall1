/** @type {import('tailwindcss').Config} */

/**
 * Färgerna accent och jour kommer från kund.ts via CSS-variabler
 * (se src/lib/tema.ts). Rör dem inte här — ändra i kund.ts istället.
 *
 * Grundfärgerna (ink, paper, sten) är samma för alla kunder.
 * De är mallens skelett, inte kundens varumärke.
 */
const medOpacitet = (variabel) => `rgb(var(${variabel}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sätts per kund
        accent: {
          DEFAULT: medOpacitet('--accent'),
          hover: medOpacitet('--accent-hover'),
        },
        jour: {
          DEFAULT: medOpacitet('--jour'),
          hover: medOpacitet('--jour-hover'),
        },

        // Mallens skelett
        ink: {
          DEFAULT: '#14181C',
          800: '#1B2126',
          700: '#232A31',
          600: '#2E373F',
        },
        paper: {
          DEFAULT: '#F6F4F1',
          100: '#FFFFFF',
          200: '#EDEAE5',
        },
        sten: {
          DEFAULT: '#6E7781',
          ljus: '#9AA3AD',
          mork: '#4A525A',
        },
      },

      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        // Telefonnumret i jour-sektionen — mallens tyngsta typografi
        nummer: ['clamp(2.25rem, 9vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },

      maxWidth: {
        sida: '76rem',
      },

      keyframes: {
        puls: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.6)' },
        },
        upp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        puls: 'puls 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        upp: 'upp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};
