// lib/categories.js
export const CATEGORIES = [
  'Mostrar todas',
  'Almacenamiento',
  'Case',
  'Estabilizadores / UPS',
  'Fuente de Poder',
  'Memoria Ram',
  'Monitores',
  'Periféricos',
  'Placas Madres',
  'Procesadores',
  'Refrigeración',
  'Tarjetas de Video'
];

export const EDITABLE_CATEGORIES = CATEGORIES.filter(c => c !== 'Mostrar todas');
