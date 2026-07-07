/** Build a tel: href from a display phone like "(555) 555-0182". */
export function telHref(phone: string): string {
  return 'tel:' + phone.replace(/[^0-9+]/g, '');
}
