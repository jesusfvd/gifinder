import type { Gif } from '../models/gif.interface';

/**
 * Genera el HTML para una tarjeta de GIF
 */
export function createGifCard(gif: Gif): string {
  const author = gif.username || 'Anónimo';
  const description = gif.description || 'Sin descripción';
  const tagsHTML = gif.tags.map((tag) => `<span class="tag">#${tag}</span>`).join('');

  return `
    <article class="gif-card" data-gif-id="${gif.id}">
      <div class="gif-image-container">
        <img src="${gif.url}" alt="${gif.title}" class="gif-image" loading="lazy">
      </div>
      <div class="gif-info">
        <h3 class="gif-title">${gif.title}</h3>
        <p class="gif-author">👤 ${author}</p>
        <p class="gif-rating">🔞 Clasificación: ${gif.rating.toUpperCase()}</p>
        <div class="gif-tags">${tagsHTML}</div>
        <p class="gif-description">${description}</p>
      </div>
    </article>
  `;
}

/**
 * Renderiza múltiples tarjetas de GIFs en un contenedor
 */
export function renderGifCards(gifs: Gif[], container: HTMLElement): void {
  if (gifs.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <p>❌ No se encontraron GIFs</p>
        <p class="no-results-hint">Intenta con otro término de búsqueda</p>
      </div>
    `;
    return;
  }

  const cardsHTML = gifs.map((gif) => createGifCard(gif)).join('');
  container.innerHTML = cardsHTML;
}
