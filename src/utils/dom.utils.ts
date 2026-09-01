/**
 * Obtiene un elemento del DOM con validación de tipo
 * Lanza un error si el elemento no existe
 */
export function getElement<T extends HTMLElement>(
  selector: string
): T {
  const element = document.querySelector<T>(selector);
  
  if (!element) {
    throw new Error(`Elemento no encontrado: ${selector}`);
  }
  
  return element;
}

/**
 * Obtiene un elemento del DOM de forma segura (puede ser null)
 */
export function getElementSafe<T extends HTMLElement>(
  selector: string
): T | null {
  return document.querySelector<T>(selector);
}

/**
 * Valida que un elemento exista antes de usarlo
 */
export function validateElement(
  element: HTMLElement | null,
  elementName: string
): asserts element is HTMLElement {
  if (!element) {
    throw new Error(`El elemento ${elementName} no existe en el DOM`);
  }
}
