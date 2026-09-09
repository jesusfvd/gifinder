# 🎬 GIFinder - Explorador de GIFs

**EC1 F2 A3:** Refactorización modular, detalle de GIF y gestión de estados

**Asignatura:** Diseño Frontend con Frameworks  
**Profesor:** Jalil Gerardo Espinoza Zepeda  
**Universidad Estatal de Sonora** | Ingeniería en Software | Periodo 2026-2

---

## 📋 Descripción

GIFinder es una aplicación web modular que muestra una galería de GIFs almacenados localmente con funcionalidad de búsqueda inteligente y visualización de detalles. Construida con TypeScript vanilla y Vite, organizada en componentes reutilizables.

### ✨ Funcionalidades Actuales

- 🎨 **Galería dinámica:** Muestra 8 GIFs con información completa
- 🔍 **Búsqueda inteligente:** Busca por título, autor, etiquetas y descripción
- 🔎 **Detalle de GIF:** Ver información completa en modal
- 📊 **Gestión de estados:** Comunicación clara del estado de la interfaz
- 📱 **Diseño responsive:** Optimizado para computadora y móvil
- ⚡ **Arquitectura modular:** Separación de responsabilidades por módulos
- 🎯 **TypeScript:** Type-safety completo sin uso de `any`

---

## 🛠️ Tecnologías

- **Node.js** v24.16.0
- **PNPM** v11.5.3
- **Vite** v8.2.2
- **TypeScript** v6.0.3

---

## 📦 Instalación

```bash
# Navegar al proyecto
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
│   ├── components/          # Componentes de interfaz
│   │   ├── gallery.ts          - Renderizado de galería
│   │   ├── gif-detail.ts       - Modal de detalle
│   │   └── status.ts           - Mensajes de estado
│   ├── data/                # Datos locales
│   │   └── gifs.ts             - Colección de GIFs
│   ├── models/              # Interfaces y tipos
│   │   ├── gif.interface.ts    - Modelo Gif
│   │   └── request-status.enum.ts - Estados
│   ├── services/            # Lógica de negocio
│   │   └── gif.service.ts      - Búsqueda y consulta
│   ├── styles/              # Estilos CSS
│   │   └── main.css
│   ├── utils/               # Utilidades
│   │   ├── dom.utils.ts        - Manejo del DOM
│   │   └── text.ts             - Procesamiento de texto
│   └── main.ts              # Punto de entrada
├── docs/                    # Documentación
├── public/                  # Archivos estáticos
├── dist/                    # Build de producción
├── index.html               # HTML principal
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🎯 Funcionalidades Implementadas

### EC1 F1 A2 - Galería y Búsqueda Local
- ✅ Modelo de datos tipado (`Gif`, `GifRating`)
- ✅ Colección local con 8 GIFs
- ✅ Galería generada dinámicamente
- ✅ Búsqueda por título, autor, etiqueta y descripción
- ✅ Manejo de cero resultados

### EC1 F2 A3 - Refactorización Modular
- ✅ **Organización modular:** Separación por responsabilidades
- ✅ **Detalle de GIF:** Modal con información completa
- ✅ **Gestión de estados:** RequestStatus con 5 estados
- ✅ **Delegación de eventos:** Click en botones "Ver detalle"
- ✅ **Servicios:** `searchGifs()` y `findGifById()`
- ✅ **Componentes:** gallery, gif-detail, status
- ✅ **Datos separados:** Colección en `data/gifs.ts`
- ✅ **Utilidades:** Normalización de texto

---

## 🔍 Cómo Usar

### Búsqueda
Escribe en el campo de búsqueda. La aplicación buscará en:
- Títulos: "Gato Sorprendido", "Desarrollador"
- Autores: "Giphy Studios", "DevLife"
- Etiquetas: #programación, #gato, #celebración
- Descripciones: "código", "sorpresa", "pizza"

**Ejemplos:**
- `gato` → Encuentra "Gato Sorprendido"
- `código` → Encuentra "Desarrollador Programando"
- `divertido` → Encuentra varios por etiqueta

### Ver Detalle
1. Haz clic en el botón "Ver detalle" de cualquier GIF
2. Se abrirá un modal con toda la información
3. Cierra con el botón ✕ o haciendo clic fuera del modal

### Restaurar Galería
Borra el texto del campo de búsqueda para ver todos los GIFs nuevamente.

---

## 📊 Estados de la Interfaz

La aplicación comunica claramente su estado mediante `RequestStatus`:

| Estado | Cuándo se muestra | Mensaje |
|--------|-------------------|---------|
| `Initial` | Al cargar la aplicación | "Listo para buscar GIFs" |
| `Loading` | Durante una búsqueda | "Buscando GIFs..." |
| `Success` | Búsqueda con resultados | "X resultados" |
| `Empty` | Sin coincidencias | "No se encontraron resultados" |
| `Error` | Error en la búsqueda | "Error al buscar GIFs" |

---

## 🏗️ Arquitectura Modular

### components/
Componentes de interfaz reutilizables:
- `gallery.ts`: Renderiza tarjetas de GIFs
- `gif-detail.ts`: Muestra y oculta detalle en modal
- `status.ts`: Actualiza mensajes según RequestStatus

### data/
Datos de la aplicación:
- `gifs.ts`: Colección local de 8 GIFs

### models/
Definiciones de tipos:
- `gif.interface.ts`: Interfaz Gif y tipo GifRating
- `request-status.enum.ts`: Estados de la interfaz

### services/
Lógica de negocio:
- `gif.service.ts`: Búsqueda y consulta de GIFs

### utils/
Funciones auxiliares:
- `dom.utils.ts`: Manejo seguro del DOM
- `text.ts`: Normalización de texto

---

## 🎓 Conceptos Aplicados

### TypeScript
- Interfaces y tipos personalizados
- Type unions y const assertions
- Parámetros opcionales y valores predeterminados
- Type assertions y validación de tipos
- Genéricos en funciones

### JavaScript Moderno
- ES Modules (import/export)
- Arrow functions
- Template literals
- Destructuring con defaults
- Array methods: `filter()`, `map()`, `find()`, `includes()`
- Spread operator (`...`)
- Nullish coalescing (`??`)
- Optional chaining (`?.`)

### Patrones de Diseño
- Separación de responsabilidades
- Delegación de eventos
- Single Responsibility Principle
- Modularidad y reutilización

### DOM Manipulation
- Selección tipada de elementos
- Validación de existencia
- Event listeners
- Delegación de eventos con `data-*` attributes
- Modal overlay

---

## 📚 Documentación Adicional

Ver [`docs/preguntas-cierre-f2-a3.md`](./docs/preguntas-cierre-f2-a3.md) para respuestas sobre:
- Organización modular
- Delegación de eventos
- RequestStatus
- Función findGifById
- Y más...

---

## ✅ Checklist EC1 F2 A3

- [x] Conserva funcionalidades de F1 A2
- [x] Organización modular por responsabilidades
- [x] Directorio `components/` con gallery, gif-detail, status
- [x] Directorio `data/` con colección local
- [x] Directorio `services/` con gif.service.ts
- [x] Directorio `utils/` con text.ts
- [x] RequestStatus con 5 estados
- [x] Detalle de GIF en modal
- [x] Botón "Ver detalle" en cada tarjeta
- [x] Delegación de eventos con data-gif-id
- [x] Cierre del modal funcional
- [x] Limpieza del detalle al buscar
- [x] Sin uso de `any`
- [x] Compilación sin errores
- [x] README actualizado

---

## 🚫 Restricciones Respetadas

- ❌ **No se usó React** (JavaScript/TypeScript vanilla)
- ❌ **No se usó Fetch API** (datos locales)
- ❌ **No se usó Giphy API** (colección local)
- ❌ **No se usó `any`** (tipos explícitos)
- ❌ **No se usaron promesas** (operaciones síncronas)
- ❌ **No se usó async/await** (no requerido aún)

---

## 📝 Estado del Proyecto

**EC1 F1 A2:** ✅ Completada  
**EC1 F2 A3:** ✅ Completada

Los datos aún son locales. La integración con Giphy API y React se realizará en fases posteriores.

---

## 🔄 Historial de Desarrollo

```bash
# Ver cambios
git log --oneline

# Commits principales:
# - feat: estructura inicial del proyecto
# - feat: modelo de datos y colección local
# - feat: galería y búsqueda implementada
# - feat: refactorización modular
# - feat: detalle de GIF y estados
```

---

## 👨‍💻 Autor

**Alumno UES** - Ingeniería en Software  
Diseño Frontend con Frameworks - EC1 F2 A3

---

## 📄 Licencia

Proyecto académico - Universidad Estatal de Sonora © 2026
