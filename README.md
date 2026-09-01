# 🎬 GIFinder - Galería Local de GIFs

**EC1 F1 A2:** Galería local y búsqueda de GIFs con fundamentos de JavaScript y TypeScript

**Asignatura:** Diseño Frontend con Frameworks  
**Profesor:** Jalil Gerardo Espinoza Zepeda  
**Universidad Estatal de Sonora** | Ingeniería en Software | Periodo 2026-2

---

## 📋 Descripción

GIFinder es una aplicación web que muestra una galería de GIFs almacenados localmente con funcionalidad de búsqueda inteligente. Construida con TypeScript vanilla y Vite, sin frameworks ni APIs externas.

### ✨ Características Principales

- 🎨 **Galería dinámica:** Muestra 8 GIFs con información completa
- 🔍 **Búsqueda inteligente:** Busca por título, autor, etiquetas o descripción
- 📱 **Diseño responsive:** Optimizado para computadora y móvil
- ⚡ **Hot Module Replacement:** Desarrollo ágil con recarga instantánea
- 🎯 **TypeScript:** Type-safety completo sin uso de `any`
- 🏗️ **Arquitectura organizada:** Separación clara de responsabilidades

---

## 🛠️ Tecnologías

- **Node.js** v24.16.0
- **PNPM** v11.5.3
- **Vite** v8.2.2
- **TypeScript** v6.0.3

---

## 📦 Instalación

```bash
# Clonar o navegar al proyecto
cd gifinder

# Instalar dependencias
pnpm install
```

---

## 🚀 Uso

### Servidor de desarrollo
```bash
pnpm dev
```
Abre tu navegador en `http://localhost:5173/`

### Compilar para producción
```bash
pnpm build
```
Los archivos optimizados se generan en `dist/`

### Previsualizar build
```bash
pnpm preview
```

---

## 📁 Estructura del Proyecto

```
gifinder/
├── src/
│   ├── components/          # Componentes UI
│   │   └── gif-card.component.ts
│   ├── models/              # Interfaces y tipos
│   │   └── gif.interface.ts
│   ├── services/            # Lógica de negocio
│   │   └── gif-collection.service.ts
│   ├── styles/              # Estilos CSS
│   │   └── main.css
│   ├── utils/               # Utilidades
│   │   └── dom.utils.ts
│   └── main.ts              # Punto de entrada
├── docs/                    # Documentación
│   └── preguntas-cierre-f1-a2.md
├── public/                  # Archivos estáticos
├── dist/                    # Build de producción
├── index.html               # HTML principal
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🎯 Funcionalidades Implementadas

### 1. Modelo de Datos (models/)
- ✅ Tipo `GifRating` con valores: `'g'`, `'pg'`, `'pg-13'`
- ✅ Interfaz `Gif` con todos los campos requeridos
- ✅ Campos opcionales: `username`, `description`

### 2. Colección Local (services/)
- ✅ 8 GIFs diferentes con IDs únicos
- ✅ Varios GIFs con descripciones
- ✅ Función `getAllGifs()` para obtener todos
- ✅ Función `searchGifs()` con búsqueda inteligente
- ✅ Función `getGifById()` para búsqueda por ID

### 3. Renderizado Dinámico (components/)
- ✅ Función `createGifCard()` genera HTML para cada GIF
- ✅ Función `renderGifCards()` renderiza múltiples tarjetas
- ✅ Muestra: título, autor, clasificación, etiquetas, descripción
- ✅ Mensaje "Sin descripción" cuando no hay
- ✅ Mensaje "No se encontraron GIFs" cuando búsqueda vacía

### 4. Búsqueda Inteligente
- ✅ Busca en: título, autor, etiquetas, descripción
- ✅ Ignora mayúsculas/minúsculas con `.toLowerCase()`
- ✅ Ignora espacios con `.trim()`
- ✅ Usa `filter()`, `map()`, `find()`, `includes()`, `some()`
- ✅ Restaura todos los GIFs cuando el campo queda vacío

### 5. Validación y Buenas Prácticas
- ✅ Validación de elementos del DOM antes de usar
- ✅ Funciones con parámetros tipados y tipos de retorno
- ✅ Sin uso de `any`
- ✅ Manejo de errores con try-catch
- ✅ Comentarios JSDoc en funciones principales

### 6. Diseño Responsive
- ✅ Grid adaptativo con `auto-fill` y `minmax()`
- ✅ Media queries para tablet y móvil
- ✅ Imágenes con `object-fit: cover`
- ✅ Transiciones suaves en hover

---

## 🔍 Búsqueda

La búsqueda funciona en tiempo real mientras escribes. Busca en:

- **Título:** "Gato Sorprendido", "Desarrollador"
- **Autor:** "Giphy Studios", "DevLife"
- **Etiquetas:** #programación, #gato, #celebración
- **Descripción:** "código", "sorpresa", "pizza"

**Ejemplos de búsqueda:**
- `gato` → Encuentra "Gato Sorprendido"
- `código` → Encuentra "Desarrollador Programando"
- `giphy` → Encuentra GIFs de ese autor
- `divertido` → Encuentra varios por etiqueta

---

## 📊 Colección de GIFs

La aplicación incluye 8 GIFs de ejemplo:

1. **Gato Sorprendido** - Con descripción
2. **Desarrollador Programando** - Con descripción
3. **Celebración con Confeti** - Sin descripción
4. **Danza Épica** - Con descripción
5. **Perro Emocionado** - Con descripción
6. **Mente Explotando** - Sin descripción
7. **Pizza Deliciosa** - Con descripción
8. **Facepalm Épico** - Con descripción

---

## 🎓 Conceptos Aplicados

### TypeScript
- Interfaces y tipos personalizados
- Type unions (`GifRating`)
- Parámetros opcionales (`?`)
- Type assertions
- Genéricos en funciones (`<T extends HTMLElement>`)

### JavaScript Moderno
- Arrow functions
- Template literals
- Destructuring
- Array methods: `filter()`, `map()`, `find()`, `some()`, `includes()`
- Optional chaining (`?.`)
- Ternary operators

### DOM Manipulation
- `querySelector()` y `querySelectorAll()`
- Event listeners
- Dynamic HTML generation
- `innerHTML` manipulation

### CSS Moderno
- CSS Grid
- Flexbox
- CSS Variables
- Media queries
- Transiciones y animaciones

---

## 📚 Documentación Adicional

Ver [`docs/preguntas-cierre-f1-a2.md`](./docs/preguntas-cierre-f1-a2.md) para respuestas detalladas sobre:
- Diferencias entre interfaces y tipos
- Funcionamiento de array methods
- Gestión del estado
- Validación del DOM
- Y más...

---

## ✅ Checklist de Cumplimiento

- [x] Modelo `Gif` con todos los campos
- [x] Tipo `GifRating` con valores correctos
- [x] Colección con mínimo 6 GIFs (tenemos 8)
- [x] IDs únicos para cada GIF
- [x] Varios GIFs con descripciones
- [x] Renderizado dinámico desde TypeScript
- [x] Búsqueda por título, autor, etiquetas, descripción
- [x] Sin uso de `any`
- [x] Funciones tipadas correctamente
- [x] Validación de elementos DOM
- [x] Diseño responsive
- [x] Sin React, Fetch API ni Giphy API
- [x] README.md actualizado
- [x] Preguntas de cierre respondidas
- [x] Compilación sin errores

---

## 🚫 Restricciones Respetadas

- ❌ **No se usó React** (JavaScript/TypeScript vanilla)
- ❌ **No se usó Fetch API** (datos locales)
- ❌ **No se usó Giphy API** (colección local)
- ❌ **No se usó `any`** (tipos explícitos)

---

## 🎨 Capturas Recomendadas

1. **Vista general** de la galería completa
2. **Búsqueda activa** mostrando resultados filtrados
3. **Sin resultados** mostrando mensaje de error
4. **Vista móvil** en responsive
5. **Detalle de tarjeta** con todos los campos
6. **Consola del navegador** mostrando logs

---

## 🔄 Git

```bash
# Ver estado
git status

# Crear commit
git add .
git commit -m "feat: completar galeria y busqueda local"

# Ver historial
git log --oneline

# Subir cambios
git push
```

---

## 👨‍💻 Autor

**Alumno UES** - Ingeniería en Software  
Diseño Frontend con Frameworks - EC1 F1 A2

---

## 📄 Licencia

Proyecto académico - Universidad Estatal de Sonora © 2026
