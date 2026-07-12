/**
 * Gör om ett telefonnummer i valfritt format till en tel:-länk.
 *
 *   '070-123 45 67'   -> 'tel:0701234567'
 *   '+46 70 123 45 67' -> 'tel:+46701234567'
 *
 * Betyder att du kan skriva numret snyggt i kund.ts utan att
 * behöva hålla reda på en separat länkvariant.
 */
export function telHref(telefon: string): string {
  const rensat = telefon.replace(/[^\d+]/g, '');
  return `tel:${rensat}`;
}

/**
 * Gör om en e-postadress till en mailto:-länk.
 */
export function epostHref(epost: string): string {
  return `mailto:${epost.trim()}`;
}
