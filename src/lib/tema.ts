import { kund } from '../config/kund';

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '0 0 0';
  return `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`;
}

function darken(hex: string, amount: number): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return hex;
  const r = Math.max(0, Math.round(parseInt(result[1], 16) * (1 - amount)));
  const g = Math.max(0, Math.round(parseInt(result[2], 16) * (1 - amount)));
  const b = Math.max(0, Math.round(parseInt(result[3], 16) * (1 - amount)));
  return `${r} ${g} ${b}`;
}

export function tillampaTema() {
  const { accent, jour } = kund.tema;
  const root = document.documentElement.style;

  root.setProperty('--accent', hexToRgb(accent));
  root.setProperty('--accent-hover', darken(accent, 0.14));
  root.setProperty('--jour', hexToRgb(jour));
  root.setProperty('--jour-hover', darken(jour, 0.14));
}
