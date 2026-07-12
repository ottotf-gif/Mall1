export function telHref(nummer: string): string {
  return `tel:${nummer.replace(/[\s\-()]/g, '')}`;
}

export function epostHref(adress: string): string {
  return `mailto:${adress}`;
}
