@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Fallback om JS inte hunnit sätta variablerna än (se lib/tema.ts) */
  :root {
    --accent: 232 114 44;
    --accent-hover: 199 98 38;
    --jour: 217 45 32;
    --jour-hover: 187 39 28;
  }

  html {
    scroll-behavior: smooth;
    /* Ankarlänkar ska inte hamna under den fasta headern */
    scroll-padding-top: 5rem;
  }

  body {
    @apply bg-ink font-sans text-base antialiased;
    /* Plats för den fasta ringknappen i botten på mobil */
    padding-bottom: env(safe-area-inset-bottom);
  }

  /* Synlig fokusring för tangentbordsnavigering */
  :focus-visible {
    @apply outline-none ring-2 ring-accent ring-offset-2 ring-offset-ink;
  }

  h1,
  h2,
  h3 {
    @apply font-display tracking-tight;
    text-wrap: balance;
  }

  p {
    text-wrap: pretty;
  }
}

@layer components {
  /* Telefonnummer ska alltid sättas med jämnbreda siffror —
     annars hoppar det till i bredden när man byter kundnummer. */
  .nummer {
    font-variant-numeric: tabular-nums;
    @apply font-display;
  }

  .knapp {
    @apply inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-4 font-display text-base font-bold transition-all duration-200 active:scale-[0.98];
  }
}

/* Respektera användarens systeminställning */
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
