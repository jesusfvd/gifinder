# 📸 Capturas Requeridas para EC1 F1 A2

## Cómo ejecutar la aplicación

```bash
cd "/Users/shumafire/Desktop/ARCHIVOS/Tareas UES/FE Jalil ues/proyectos/gifinder"
pnpm dev
```

Luego abre: http://localhost:5173/

---

## 📷 1. Vista General de la Galería

**Qué mostrar:**
- Página completa con todos los GIFs (8 tarjetas)
- Header con título "🎬 GIFinder"
- Campo de búsqueda vacío
- Grid de tarjetas bien distribuidas

**Elementos visibles:**
- Título de cada GIF
- Autor
- Clasificación (G, PG, PG-13)
- Etiquetas (#tags)
- Descripción o "Sin descripción"

---

## 📷 2. Búsqueda Activa con Resultados

**Qué hacer:**
1. Escribe "gato" en el campo de búsqueda
2. Captura la pantalla mostrando solo los GIFs filtrados

**Debe mostrar:**
- Campo de búsqueda con el término "gato"
- Solo GIFs que coincidan (ejemplo: "Gato Sorprendido")
- Menos tarjetas que en la vista general

**Otros términos para probar:**
- "programación" → Muestra "Desarrollador Programando"
- "divertido" → Muestra varios por etiqueta
- "Giphy" → Muestra GIFs de ese autor

---

## 📷 3. Sin Resultados

**Qué hacer:**
1. Escribe "dinosaurio" o algo que no exista
2. Captura el mensaje de error

**Debe mostrar:**
- Campo de búsqueda con el término inexistente
- Mensaje: "❌ No se encontraron GIFs"
- Mensaje: "Intenta con otro término de búsqueda"
- Sin tarjetas visibles

---

## 📷 4. Vista Móvil (Responsive)

**Qué hacer:**
1. Abre DevTools (F12 o Cmd+Opt+I)
2. Activa el modo responsive
3. Selecciona "iPhone SE" o similar
4. Captura la vista móvil

**Debe mostrar:**
- Layout en una sola columna
- Tarjetas apiladas verticalmente
- Todo el contenido legible y bien espaciado
- Campo de búsqueda adaptado

---

## 📷 5. Detalle de Tarjeta GIF

**Qué hacer:**
1. Haz zoom o captura una sola tarjeta completa
2. Que se vea claramente toda la información

**Debe mostrar claramente:**
- ✅ Imagen del GIF
- ✅ Título
- ✅ Autor (👤 nombre) o "👤 Anónimo"
- ✅ Clasificación (🔞 G, PG o PG-13)
- ✅ Etiquetas (#tag1 #tag2)
- ✅ Descripción o "Sin descripción"

---

## 📷 6. Consola del Navegador

**Qué hacer:**
1. Abre DevTools (F12)
2. Ve a la pestaña "Console"
3. Recarga la página
4. Captura los logs

**Debe mostrar:**
```
✅ Aplicación GIFinder inicializada correctamente
📊 Total de GIFs en la colección: 8
```

**Si haces búsquedas, también verás:**
```
🔍 Búsqueda: "gato" - 1 resultado(s)
🔄 Mostrando todos los GIFs
```

---

## 📷 7. Estructura del Proyecto (VS Code)

**Qué hacer:**
1. Abre el proyecto en VS Code
2. Expande todas las carpetas de `src/`
3. Captura el explorador de archivos

**Debe mostrar:**
```
gifinder/
├── src/
│   ├── components/
│   │   └── gif-card.component.ts
│   ├── models/
│   │   └── gif.interface.ts
│   ├── services/
│   │   └── gif-collection.service.ts
│   ├── styles/
│   │   └── main.css
│   ├── utils/
│   │   └── dom.utils.ts
│   └── main.ts
├── docs/
│   └── preguntas-cierre-f1-a2.md
├── README.md
└── package.json
```

---

## 📷 8. Compilación Exitosa

**Qué hacer:**
1. Abre terminal
2. Ejecuta: `pnpm build`
3. Captura el output

**Debe mostrar:**
```
$ tsc && vite build
vite v8.2.2 building client environment for production...
✓ 8 modules transformed.
dist/index.html                 1.15 kB │ gzip: 0.59 kB
dist/assets/index-BNyDPjlO.css  2.75 kB │ gzip: 1.07 kB
dist/assets/index-BJhSugz3.js   5.05 kB │ gzip: 2.25 kB
✓ built in XXms
```

---

## 📷 9. Git Log

**Qué hacer:**
1. Ejecuta: `git log --oneline`
2. Captura el output

**Debe mostrar:**
```
558dfbe (HEAD -> main) feat: completar galeria y busqueda local
33e28a1 chore: inicializar proyecto gifinder con Vite + TypeScript
```

---

## 📷 10. Código TypeScript

**Archivos importantes para capturar:**

**a) src/models/gif.interface.ts**
- Muestra el tipo `GifRating`
- Muestra la interfaz `Gif`

**b) src/services/gif-collection.service.ts**
- Muestra la función `searchGifs()` completa
- Muestra la colección de GIFs

**c) src/main.ts**
- Muestra la función `handleSearch()`

---

## ✅ Checklist de Capturas

- [ ] 1. Vista general con 8 GIFs
- [ ] 2. Búsqueda activa ("gato")
- [ ] 3. Sin resultados ("dinosaurio")
- [ ] 4. Vista móvil (responsive)
- [ ] 5. Detalle de una tarjeta completa
- [ ] 6. Consola con logs
- [ ] 7. Estructura de carpetas en VS Code
- [ ] 8. Compilación exitosa (pnpm build)
- [ ] 9. Git log con commits
- [ ] 10. Código TypeScript (interfaces y funciones)

---

## 💡 Tips para Capturas

- Usa pantalla completa o ventana grande
- Asegúrate de que el texto sea legible
- Incluye URLs del navegador cuando sea posible
- No captures información personal si no quieres
- Nombra los archivos: `captura-1-vista-general.png`, etc.

---

## 🎯 Capturas Mínimas Esenciales

Si solo puedes tomar algunas, estas son las MÁS IMPORTANTES:

1. ✅ Vista general (todos los GIFs)
2. ✅ Búsqueda funcionando
3. ✅ Sin resultados
4. ✅ Compilación exitosa
5. ✅ Git log

---

**¡Listo para capturar! 📸**
