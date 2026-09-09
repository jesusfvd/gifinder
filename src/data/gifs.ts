import type { Gif } from '../models/gif.interface';

/**
 * Colección local de GIFs
 * Datos de ejemplo para el funcionamiento de la aplicación
 */
export const gifs: Gif[] = [
  {
    id: 'gif-001',
    title: 'Gato Sorprendido',
    url: 'https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif',
    username: 'Giphy Studios',
    tags: ['gato', 'sorpresa', 'animales', 'divertido'],
    rating: 'g',
    description: 'Un adorable gato con expresión de sorpresa total',
  },
  {
    id: 'gif-002',
    title: 'Desarrollador Programando',
    url: 'https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif',
    username: 'DevLife',
    tags: ['programación', 'código', 'desarrollador', 'trabajo'],
    rating: 'g',
    description: 'Desarrollador concentrado escribiendo código intensamente',
  },
  {
    id: 'gif-003',
    title: 'Celebración con Confeti',
    url: 'https://media.giphy.com/media/g9582DNuQppxC/giphy.gif',
    tags: ['celebración', 'feliz', 'fiesta', 'confeti'],
    rating: 'g',
  },
  {
    id: 'gif-004',
    title: 'Danza Épica',
    url: 'https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif',
    username: 'Dance Master',
    tags: ['baile', 'divertido', 'música', 'épico'],
    rating: 'pg',
    description: 'Persona bailando con movimientos épicos y divertidos',
  },
  {
    id: 'gif-005',
    title: 'Perro Emocionado',
    url: 'https://media.giphy.com/media/3o6Zt6KHxJTbXCnSvu/giphy.gif',
    username: 'Pet Lovers',
    tags: ['perro', 'emoción', 'animales', 'feliz', 'mascota'],
    rating: 'g',
    description: 'Perro saltando de emoción al ver a su dueño',
  },
  {
    id: 'gif-006',
    title: 'Mente Explotando',
    url: 'https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif',
    tags: ['mente', 'sorpresa', 'increíble', 'explosión'],
    rating: 'pg',
  },
  {
    id: 'gif-007',
    title: 'Pizza Deliciosa',
    url: 'https://media.giphy.com/media/4ayiIWaq2VULC/giphy.gif',
    username: 'Food Network',
    tags: ['comida', 'pizza', 'delicioso', 'cocina'],
    rating: 'g',
    description: 'Pizza recién horneada con queso derritiéndose perfectamente',
  },
  {
    id: 'gif-008',
    title: 'Facepalm Épico',
    url: 'https://media.giphy.com/media/3og0INyCmHlNylks9O/giphy.gif',
    username: 'Reaction GIFs',
    tags: ['reacción', 'facepalm', 'vergüenza', 'divertido'],
    rating: 'pg',
    description: 'Reacción clásica de llevarse la mano a la cara por algo vergonzoso',
  },
];
