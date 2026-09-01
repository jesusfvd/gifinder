# 📝 Preguntas de Cierre - EC1 F1 A2

**Galería local y búsqueda de GIFs con fundamentos de JavaScript y TypeScript**

---

## 1. ¿Qué diferencia existe entre una interfaz (`interface`) y un tipo (`type`) en TypeScript?

Ambos sirven para definir la forma de los datos, pero tienen diferencias:

**Interface:**
- Se puede extender con `extends`
- Se puede re-abrir para agregar propiedades
- Mejor para objetos y clases
- Ejemplo: `interface Gif { id: string; title: string; }`

**Type:**
- Puede representar tipos primitivos, uniones, intersecciones
- No se puede re-abrir
- Más flexible para tipos complejos
- Ejemplo: `type GifRating = 'g' | 'pg' | 'pg-13';`

En este proyecto usé `interface` para `Gif` (estructura de objeto) y `type` para `GifRating` (unión de strings literales).

---

## 2. ¿Por qué se utiliza el operador opcional (`?`) en algunos campos de la interfaz Gif?

El operador `?` indica que un campo es **opcional**, es decir, puede existir o no en el objeto.

**En el proyecto:**
```typescript
username?: string;    // Puede no tener autor
description?: string; // Puede no tener descripción
```

**Ventajas:**
- Flexibilidad: no todos los GIFs tienen autor o descripción
- TypeScript no obliga a incluir estos campos
- Se puede verificar su existencia con: `if (gif.username) { ... }`

Sin `?` todos los campos serían obligatorios y causaría errores de compilación.

---

## 3. ¿Qué hace el método `filter()` y cómo se aplicó en la búsqueda?

`filter()` crea un **nuevo array** con los elementos que cumplen una condición.

**Uso en el proyecto:**
```typescript
return gifCollection.filter((gif) => {
  return titleMatch || authorMatch || tagsMatch || descriptionMatch;
});
```

**Cómo funciona:**
1. Recorre cada GIF del array
2. Evalúa si coincide con el término de búsqueda
3. Si devuelve `true`, lo incluye en el resultado
4. Si devuelve `false`, lo descarta

**Ejemplo:** Si busco "gato", solo devuelve GIFs que tengan "gato" en título, autor, etiquetas o descripción.

---

## 4. ¿Qué diferencia hay entre `map()` y `forEach()`?

**map():**
- Crea y **devuelve un nuevo array** transformado
- No modifica el array original
- Uso: cuando necesitas transformar datos
- Ejemplo: `gifs.map(gif => gif.title)` → devuelve array de títulos

**forEach():**
- **No devuelve nada** (devuelve `undefined`)
- Solo ejecuta una función por cada elemento
- Uso: cuando necesitas hacer algo con cada elemento (mostrar, guardar, etc.)
- Ejemplo: `gifs.forEach(gif => console.log(gif))` → solo imprime

**En el proyecto:**
- Usé `map()` para generar HTML de tarjetas (necesito el array resultante)
- Podría usar `forEach()` para ejecutar acciones sin retornar valores

---

## 5. ¿Cómo funciona el método `includes()` en la búsqueda?

`includes()` verifica si un **string** contiene otro string dentro.

**Ejemplo en el proyecto:**
```typescript
gif.title.toLowerCase().includes(normalizedSearch)
```

**Pasos:**
1. `gif.title` → "Gato Sorprendido"
2. `.toLowerCase()` → "gato sorprendido"
3. `.includes("gato")` → devuelve `true`

**Ventajas:**
- Búsqueda parcial: "gato" encuentra "Gato Sorprendido"
- Case-insensitive con `.toLowerCase()`
- Simple y legible

---

## 6. ¿Por qué se usa `.toLowerCase()` y `.trim()` en la búsqueda?

**`.toLowerCase()`:**
- Convierte todo a minúsculas
- Hace la búsqueda **case-insensitive** (ignora mayúsculas)
- Ejemplo: "GATO", "gato", "Gato" → todos se vuelven "gato"

**`.trim()`:**
- Elimina espacios al inicio y final
- Evita búsquedas vacías o con espacios innecesarios
- Ejemplo: "  gato  " → "gato"

**Sin esto:**
- Buscar "gato" no encontraría "Gato Sorprendido"
- Espacios causarían búsquedas incorrectas

---

## 7. ¿Qué es el operador spread (`...`) y dónde se usa?

El operador `...` (spread) **expande** los elementos de un array u objeto.

**En el proyecto:**
```typescript
return [...gifCollection];
```

**Qué hace:**
- Crea una **copia nueva** del array original
- No modifica `gifCollection`
- Evita efectos secundarios

**Ejemplo:**
```typescript
const original = [1, 2, 3];
const copia = [...original];  // [1, 2, 3]
original === copia  // false (son diferentes referencias)
```

---

## 8. ¿Cómo se validan los elementos del DOM antes de usarlos?

**Problema:** Si un elemento no existe, usar `querySelector()` devuelve `null` y causa errores.

**Solución en el proyecto:**

**Opción 1 - Con función utilitaria:**
```typescript
function getElement<T extends HTMLElement>(selector: string): T {
  const element = document.querySelector<T>(selector);
  
  if (!element) {
    throw new Error(`Elemento no encontrado: ${selector}`);
  }
  
  return element;
}
```

**Opción 2 - Verificación manual:**
```typescript
const element = document.querySelector('#mi-elemento');
if (!element) {
  console.error('Elemento no encontrado');
  return;
}
```

**Ventaja:** Detecta errores temprano y evita crasheos.

---

## 9. ¿Qué es un type assertion y cuándo se usa?

Un **type assertion** le dice a TypeScript qué tipo tiene una variable cuando tú sabes más que el compilador.

**En el proyecto:**
```typescript
const searchInput = getElement<HTMLInputElement>('#search-input');
```

**Qué hace:**
- `<HTMLInputElement>` asegura que es un input
- Ahora puedo usar `searchInput.value` sin errores
- TypeScript confía en que yo sé que es un input

**Sin el assertion:**
```typescript
const element = document.querySelector('#search-input');
// element es de tipo Element | null
// No puedo usar .value directamente
```

---

## 10. ¿Cómo se manejan los valores opcionales con optional chaining (`?.`)?

**Optional chaining (`?.`)** permite acceder a propiedades que pueden no existir sin causar errores.

**En el proyecto:**
```typescript
const authorMatch = gif.username
  ? gif.username.toLowerCase().includes(normalizedSearch)
  : false;
```

**Con optional chaining sería:**
```typescript
const authorMatch = gif.username?.toLowerCase().includes(normalizedSearch) ?? false;
```

**Cómo funciona:**
- Si `gif.username` existe → ejecuta `.toLowerCase()`
- Si `gif.username` es `undefined` → devuelve `undefined`
- `??` (nullish coalescing) convierte `undefined` en `false`

---

## 11. ¿Qué son los template literals y cómo se usan?

**Template literals** son strings con backticks (`` ` ``) que permiten:
- Múltiples líneas
- Interpolación de variables con `${}`

**En el proyecto:**
```typescript
return `
  <article class="gif-card">
    <h3>${gif.title}</h3>
    <p>${author}</p>
  </article>
`;
```

**Ventajas sobre comillas normales:**
```javascript
// Forma antigua (mal)
const html = '<div>' + title + '</div>';

// Template literal (bien)
const html = `<div>${title}</div>`;
```

---

## 12. ¿Por qué se separa el código en diferentes archivos (models, services, components)?

**Organización por responsabilidades:**

**models/** - Define la estructura de datos
- `gif.interface.ts` → Qué es un GIF

**services/** - Lógica de negocio
- `gif-collection.service.ts` → Dónde están los GIFs, cómo buscarlos

**components/** - UI y renderizado
- `gif-card.component.ts` → Cómo mostrar un GIF

**utils/** - Funciones reutilizables
- `dom.utils.ts` → Validación del DOM

**Ventajas:**
- ✅ Código más legible
- ✅ Fácil de mantener
- ✅ Fácil de testear
- ✅ Reutilizable

---

## 13. ¿Qué es el tipo de retorno de una función y por qué es importante?

El **tipo de retorno** indica qué devuelve una función.

**Ejemplos del proyecto:**
```typescript
function getAllGifs(): Gif[] {
  return [...gifCollection];  // Devuelve array de Gif
}

function renderGifCards(gifs: Gif[], container: HTMLElement): void {
  container.innerHTML = '...';  // No devuelve nada
}
```

**Tipos de retorno comunes:**
- `string` → devuelve texto
- `number` → devuelve número
- `boolean` → devuelve true/false
- `Gif[]` → devuelve array de GIFs
- `void` → no devuelve nada
- `Gif | undefined` → puede devolver GIF o undefined

**Ventaja:** TypeScript detecta errores si intentas devolver algo incorrecto.

---

## 14. ¿Cómo funciona el método `some()` en arrays?

`some()` verifica si **al menos un elemento** cumple una condición.

**En el proyecto:**
```typescript
const tagsMatch = gif.tags.some((tag) =>
  tag.toLowerCase().includes(normalizedSearch)
);
```

**Cómo funciona:**
1. Recorre el array de tags
2. Por cada tag, verifica si incluye el término de búsqueda
3. Si **alguno** cumple → devuelve `true`
4. Si **ninguno** cumple → devuelve `false`

**Ejemplo:**
```typescript
const tags = ['programación', 'código', 'web'];
tags.some(tag => tag.includes('código'))  // true
tags.some(tag => tag.includes('gato'))    // false
```

---

## 15. ¿Qué ventajas tiene usar TypeScript en lugar de JavaScript puro?

**Ventajas en este proyecto:**

1. **Type Safety:** Detecta errores antes de ejecutar
   ```typescript
   const gif: Gif = { id: 123 }  // ❌ Error: id debe ser string
   ```

2. **Autocompletado:** El editor sugiere propiedades
   ```typescript
   gif.  // Aparecen: id, title, url, username, tags...
   ```

3. **Refactoring seguro:** Renombrar propiedades sin romper código

4. **Documentación automática:** Los tipos documentan el código

5. **Prevención de bugs:**
   ```typescript
   gif.rating = 'x-rated'  // ❌ Error: solo acepta 'g', 'pg', 'pg-13'
   ```

6. **Mejor mantenimiento:** Código más predecible y confiable

---

## 16. ¿Cómo se gestiona el estado de la aplicación sin usar frameworks?

**Estado = datos que cambian durante la ejecución**

**En este proyecto:**

1. **Estado inicial:** Array de todos los GIFs
```typescript
const allGifs = getAllGifs();
```

2. **Estado filtrado:** Resultado de búsqueda
```typescript
const results = searchGifs(searchTerm);
```

3. **Renderizado basado en estado:**
```typescript
renderGifCards(results, container);
```

**Flujo:**
```
Usuario escribe → Cambio de estado (búsqueda) → Re-renderizado
```

**Sin framework:**
- Estado vive en variables locales
- Cambios se detectan con event listeners
- Re-renderizado manual con `innerHTML`

**Con framework (React):**
- Estado en `useState`
- Cambios automáticos
- Re-renderizado automático

---

## 📚 Conclusión

Estas preguntas cubren los conceptos fundamentales aplicados en el proyecto:
- TypeScript y tipado fuerte
- Métodos de arrays (filter, map, some, includes)
- Manipulación del DOM
- Organización de código
- Búsqueda y validación

**Aprendizajes clave:**
- ✅ TypeScript mejora la calidad del código
- ✅ Los array methods hacen el código más expresivo
- ✅ La validación previene errores
- ✅ La organización facilita el mantenimiento

---

**Universidad Estatal de Sonora** | Ingeniería en Software | EC1 F1 A2
