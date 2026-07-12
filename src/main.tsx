import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { tillampaTema } from './lib/tema';
import { kund } from './config/kund';
import './index.css';

tillampaTema();

document.title = `${kund.foretag.namn} — ${kund.hero.etikett}`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
