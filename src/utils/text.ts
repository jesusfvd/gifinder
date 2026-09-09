/**
 * Normaliza un texto eliminando espacios externos y convirtiéndolo a minúsculas
 * @param value Texto a normalizar
 * @returns Texto normalizado
 */
export function normalizeText(value: string): string {
  return value.trim().toLocaleLowerCase('es-MX');
}
