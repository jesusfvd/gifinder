import { RequestStatus } from '../models/request-status.enum';

/**
 * Actualiza el mensaje de estado según el RequestStatus y cantidad de resultados
 * @param status Estado actual de la petición
 * @param container Elemento donde se mostrará el mensaje
 * @param count Cantidad de resultados (opcional)
 */
export function updateStatus(
  status: RequestStatus,
  container: HTMLElement,
  count?: number,
): void {
  let message = '';

  switch (status) {
    case RequestStatus.Initial:
      message = 'Listo para buscar GIFs';
      break;

    case RequestStatus.Loading:
      message = 'Buscando GIFs...';
      break;

    case RequestStatus.Success:
      if (count !== undefined) {
        const label = count === 1 ? 'resultado' : 'resultados';
        message = `${count} ${label}`;
      } else {
        message = 'Búsqueda completada';
      }
      break;

    case RequestStatus.Empty:
      message = 'No se encontraron resultados';
      break;

    case RequestStatus.Error:
      message = 'Error al buscar GIFs';
      break;

    default:
      message = '';
  }

  container.textContent = message;
}
