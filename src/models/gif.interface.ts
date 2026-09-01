/**
 * Valores permitidos para la clasificación de un GIF
 */
export type GifRating = 'g' | 'pg' | 'pg-13';

/**
 * Interfaz que representa un GIF en la aplicación
 */
export interface Gif {
  /** Identificador único del GIF */
  id: string;
  
  /** Título del GIF */
  title: string;
  
  /** URL de la imagen del GIF */
  url: string;
  
  /** Nombre del autor del GIF (opcional) */
  username?: string;
  
  /** Etiquetas asociadas al GIF */
  tags: string[];
  
  /** Clasificación del contenido */
  rating: GifRating;
  
  /** Descripción del GIF (opcional) */
  description?: string;
}
