import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { tillampaTema } from './lib/tema';
import { kund } from './config/kund';
import './index.css';

// Kundens färger sätts som CSS-variabler innan första renderingen
tillampaTema();

// Sidtitel från configen — ett ställe mindre att komma ihåg att byta
document.title = `${kund.foretag.namn} — ${kund.hero.ogonbryn}`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
