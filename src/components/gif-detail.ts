import type { Gif } from '../models/gif.interface';

/**
 * Muestra el detalle de un GIF en un modal
 * @param gif GIF a mostrar
 * @param container Contenedor del detalle
 */
export function showGifDetail(gif: Gif, container: HTMLElement): void {
  const {
    title,
    url,
    username = 'Autor no disponible',
    tags,
    rating,
    description = 'Sin descripción disponible',
  } = gif;

  container.innerHTML = `
    <div class="gif-detail-overlay" role="dialog" aria-modal="true" aria-labelledby="detail-title">
      <div class="gif-detail-content">
        <button 
          class="btn-close" 
          aria-label="Cerrar detalle"
          id="close-detail">
          ✕
        </button>
        <img src="${url}" alt="${title}" class="detail-image" />
        <div class="detail-info">
          <h2 id="detail-title">${title}</h2>
          <p><strong>Autor:</strong> ${username}</p>
          <p><strong>Clasificación:</strong> ${rating.toUpperCase()}</p>
          <p><strong>Descripción:</strong> ${description}</p>
          <div class="detail-tags">
            <strong>Etiquetas:</strong>
            ${tags.map((tag) => `<span class="tag">#${tag}</span>`).join(' ')}
          </div>
        </div>
      </div>
    </div>
  `;

  container.style.display = 'block';

  // Agregar evento al botón de cerrar
  const closeBtn = container.querySelector('#close-detail');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      hideGifDetail(container);
    });
  }

  // Cerrar al hacer clic fuera del contenido
  const overlay = container.querySelector('.gif-detail-overlay');
  if (overlay) {
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        hideGifDetail(container);
      }
    });
  }
}

/**
 * Oculta el detalle del GIF
 * @param container Contenedor del detalle
 */
export function hideGifDetail(container: HTMLElement): void {
  container.innerHTML = '';
  container.style.display = 'none';
}
