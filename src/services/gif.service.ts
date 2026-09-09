import type { Gif } from '../models/gif.interface';
import { gifs } from '../data/gifs';
import { normalizeText } from '../utils/text';

/**
 * Busca GIFs por título, autor, etiqueta o descripción
 * @param query Término de búsqueda
 * @returns Arreglo de GIFs que coinciden con la búsqueda
 */
export function searchGifs(query: string): Gif[] {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return [...gifs];
  }

  return gifs.filter((gif) => {
    const searchableText = [
      gif.title,
      gif.username ?? '',
      gif.description ?? '',
      ...gif.tags,
    ].join(' ');

    return normalizeText(searchableText).includes(normalizedQuery);
  });
}

/**
 * Busca un GIF por su identificador
 * @param id Identificador del GIF
 * @returns GIF encontrado o undefined si no existe
 */
export function findGifById(id: string): Gif | undefined {
  return gifs.find((gif) => gif.id === id);
}
