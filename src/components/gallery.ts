import type { Gif } from '../models/gif.interface';

/**
 * Crea el HTML de una tarjeta de GIF
 * @param gif Objeto GIF a renderizar
 * @returns HTML de la tarjeta
 */
function createGifCard(gif: Gif): string {
  const { title, url, username = 'Autor no disponible', tags, rating } = gif;

  return `
    <article class="gif-card">
      <img src="${url}" alt="${title}" loading="lazy" />
      <div class="gif-card__content">
        <h2>${title}</h2>
        <p>${username} - Clasificación ${rating.toUpperCase()}</p>
        <p class="tags">
          ${tags.map((tag) => `#${tag}`).join(' ')}
        </p>
        <button 
          class="btn-detail" 
          data-gif-id="${gif.id}"
          aria-label="Ver detalle de ${title}">
          Ver detalle
        </button>
      </div>
    </article>
  `;
}

/**
 * Renderiza la galería de GIFs
 * @param gifs Arreglo de GIFs a mostrar
 * @param container Contenedor donde se renderizarán las tarjetas
 */
export function renderGallery(gifs: Gif[], container: HTMLElement): void {
  if (gifs.length === 0) {
    container.innerHTML = `
      <p class="empty-state">
        No se encontraron GIFs.
        Prueba con otra palabra.
      </p>
    `;
    return;
  }

  container.innerHTML = gifs.map(createGifCard).join('');
}
