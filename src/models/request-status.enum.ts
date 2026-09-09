/**
 * Estados posibles de una petición o consulta en la interfaz
 */
export const RequestStatus = {
  /** Estado inicial antes de realizar cualquier operación */
  Initial: 'initial',
  
  /** Cargando datos o procesando */
  Loading: 'loading',
  
  /** Operación exitosa con resultados */
  Success: 'success',
  
  /** Operación exitosa pero sin resultados */
  Empty: 'empty',
  
  /** Error durante la operación */
  Error: 'error',
} as const;

export type RequestStatus = typeof RequestStatus[keyof typeof RequestStatus];
