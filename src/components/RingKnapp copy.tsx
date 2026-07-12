/** @type {import('tailwindcss').Config} */

/**
 * Paletten är hämtad från hantverkarens värld, inte från webben:
 * papper (arbetsorder), kalk (betong), blyerts (text), och en
 * signalfärg som sitter på skåpbilen.
 *
 * accent och jour kommer från kund.ts via CSS-variabler (lib/tema.ts).
 * Grundfärgerna nedan är mallens skelett och är samma för alla kunder.
 *
 * Inga toningar. Inga glow-skuggor. Skyltar har inte sådant.
 */
const varFarg = (namn) => `rgb(var(${namn}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: varFarg('--accent'),
          mork: varFarg('--accent-mork'),
        },
        jour: {
          DEFAULT: varFarg('--jour'),
          mork: varFarg('--jour-mork'),
        },

        papper: '#F7F5F1',
        kalk: '#E9E5DE',
        blyerts: {
          DEFAULT: '#141719',
          800: '#1E2225',
        },
        grafit: {
          DEFAULT: '#565D64',
          ljus: '#8A9199',
        },
      },

      fontFamily: {
        // Archivo Black finns bara i en vikt. Det är poängen —
        // den är gjord för att vara stor och tung, inte nyanserad.
        display: ['"Archivo Black"', 'Impact', 'sans-serif'],
        sans: ['Barlow', 'system-ui', 'sans-serif'],
      },

      letterSpacing: {
        skylt: '-0.02em',
      },

      borderRadius: {
        // Vassa hörn genomgående. 2px är allt vi tillåter oss.
        DEFAULT: '2px',
      },

      fontSize: {
        nummer: ['clamp(2.5rem, 11vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
      },

      maxWidth: {
        sida: '78rem',
      },
    },
  },
  plugins: [],
};
