@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Barlow:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Reserv om JS inte hunnit sätta variablerna än (se lib/tema.ts) */
  :root {
    --accent: 27 58 107;
    --accent-mork: 18 39 72;
    --jour: 208 28 15;
    --jour-mork: 168 22 12;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 4.5rem;
  }

  body {
    @apply bg-papper font-sans text-blyerts antialiased;
  }

  h1,
  h2,
  h3 {
    @apply font-display uppercase tracking-skylt;
  }

  :focus-visible {
    @apply outline-none ring-2 ring-blyerts ring-offset-2;
  }
}

@layer components {
  /* Jämnbreda siffror — annars hoppar numret i bredd mellan kunder */
  .nummer {
    font-variant-numeric: tabular-nums;
    @apply font-display tracking-skylt;
  }

  /* Knappar ska se ut som knappar på en maskin: fyrkantiga och tydliga */
  .knapp {
    @apply inline-flex items-center justify-center gap-2.5 px-7 py-4 font-display text-sm uppercase tracking-skylt transition-colors duration-150;
  }

  /* Etiketten ovanför en rubrik. Sätts som en liten skylt, inte som
     ett svävande versalord med luft mellan bokstäverna. */
  .etikett {
    @apply inline-block bg-blyerts px-2.5 py-1 font-display text-[0.7rem] uppercase tracking-skylt text-papper;
  }

  /* Varningstejp. Hårda kanter — det är tejp, inte en toning. */
  .tejp {
    background-image: repeating-linear-gradient(
      -45deg,
      #141719 0 12px,
      transparent 12px 24px
    );
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
