import './styles/main.css';
import { searchGifs, findGifById } from './services/gif.service';
import { renderGallery } from './components/gallery';
import { showGifDetail, hideGifDetail } from './components/gif-detail';
import { updateStatus } from './components/status';
import { RequestStatus } from './models/request-status.enum';

function initApp(): void {
  // Selección y validación de elementos del DOM
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) {
    throw new Error('No se encontró el elemento #app.');
  }

  // Crear estructura HTML
  app.innerHTML = `
    <main class="app-shell">
      <header class="hero">
        <p class="eyebrow">EC1 - Fundamentos de TypeScript</p>
        <h1>GIFinder</h1>
        <p>Explora una colección local de GIFs.</p>
      </header>
      <form id="search-form" class="search-form">
        <label for="search-input">
          Buscar por título, autor o etiqueta
        </label>
        <div class="search-row">
          <input 
            id="search-input" 
            name="query"
            type="search" 
            placeholder="Ejemplo: gato"
            autocomplete="off" />
          <button type="submit">Buscar</button>
        </div>
      </form>
      <p id="search-status" class="status" aria-live="polite"></p>
      <section id="gif-gallery" class="gallery" aria-label="Resultados"></section>
      <div id="gif-detail" class="gif-detail-container"></div>
    </main>
  `;

  // Obtener referencias a los elementos
  const form = document.querySelector<HTMLFormElement>('#search-form');
  const input = document.querySelector<HTMLInputElement>('#search-input');
  const gallery = document.querySelector<HTMLElement>('#gif-gallery');
  const statusElement = document.querySelector<HTMLElement>('#search-status');
  const detailContainer = document.querySelector<HTMLElement>('#gif-detail');

  if (!form || !input || !gallery || !statusElement || !detailContainer) {
    throw new Error('No se pudo inicializar la interfaz de búsqueda.');
  }

  // Crear referencias no nulas para el scope de las funciones
  const galleryElement: HTMLElement = gallery;
  const statusEl: HTMLElement = statusElement;
  const detailEl: HTMLElement = detailContainer;

  /**
   * Muestra los resultados de búsqueda
   */
  function showResults(query: string): void {
    // Limpiar detalle al hacer nueva búsqueda
    hideGifDetail(detailEl);

    const results = searchGifs(query);
    renderGallery(results, galleryElement);

    if (results.length === 0) {
      updateStatus(RequestStatus.Empty, statusEl);
    } else {
      updateStatus(RequestStatus.Success, statusEl, results.length);
    }
  }

  // Evento submit del formulario
  form.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();
    showResults(input.value);
  });

  // Evento input para restaurar resultados al limpiar
  input.addEventListener('input', () => {
    if (input.value.trim() === '') {
      showResults('');
    }
  });

  // Delegación de eventos para los botones "Ver detalle"
  galleryElement.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const button = target.closest('.btn-detail') as HTMLButtonElement;

    if (button) {
      const gifId = button.dataset.gifId;

      if (gifId) {
        const gif = findGifById(gifId);

        if (gif) {
          showGifDetail(gif, detailEl);
        }
      }
    }
  });

  // Mostrar galería inicial
  updateStatus(RequestStatus.Initial, statusEl);
  showResults('');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
