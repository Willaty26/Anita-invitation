# Invitación de Retiro — Anita Wright-Antoine

Crear una invitación de una sola página, tipo tarjeta, con la misma estética azul "blueprint" del folleto: fondo azul marino, líneas y elevaciones arquitectónicas tenues, tipografía serif elegante (tipo Cormorant/Playfair) para los títulos y sans-serif espaciada para las etiquetas tipo plano.

## Contenido de la invitación

- Encabezado pequeño: `NEW YORK CITY HOUSING AUTHORITY`
- Título grande serif: `RETIREMENT CELEBRATION`
- Subtítulo cursiva: `In honor of Anita Wright-Antoine — A Blueprint of Memories and a Legacy of Excellence`
- Bloque "Detalles del evento" estilo cartela de plano:
  - FECHA: *Sábado, [fecha por confirmar]*
  - HORA: *6:00 PM*
  - LUGAR: **The Bordone LIC**
  - DIRECCIÓN: `10-91 Jackson Ave, Long Island City, NY 11101`
- Mapa estático embebido (iframe Google Maps) de la dirección, con marco/borde blueprint.
- Bloque RSVP placeholder: "Kindly RSVP by [fecha] — [contacto]"
- Pie con ícono de edificio y línea decorativa.
- Botón "Add to Calendar" y botón "Get Directions" (link a Google Maps).

> Los campos de fecha, RSVP y nombre de salón se dejan como texto editable/placeholders bien identificados para que el usuario los cambie fácilmente.

## Implementación técnica

- Una sola ruta: reemplazar `src/routes/index.tsx` con la invitación.
- Tokens de diseño en `src/styles.css`:
  - `--background`: azul marino profundo (`oklch(0.20 0.08 260)`)
  - `--foreground`: blanco hueso
  - `--accent`: azul claro para líneas tipo blueprint
  - Fuentes Google: **Cormorant Garamond** (display serif) + **Inter** (sans tracking wide), cargadas vía `<link>` en `__root.tsx`.
- Fondo: capas con `background-image` SVG de líneas finas (grid de plano) + degradado sutil. SVG inline ligero con elevaciones arquitectónicas estilizadas en las esquinas, baja opacidad.
- Marco central tipo "ficha técnica" con bordes finos blancos, esquinas con marcas tipo blueprint (`+` en cada esquina).
- Mapa: `<iframe>` de Google Maps embed con la dirección, con `filter: invert hue-rotate` opcional para que se vea azulado, o simplemente con overlay azul translúcido.
- SEO: title "Anita Wright-Antoine — Retirement Celebration", description acorde, og:title/description.
- Responsive: mobile-first; el bloque del título escala, el mapa ocupa todo el ancho en móvil.
- Sin backend ni Cloud necesario.

## Archivos a tocar

- `src/routes/index.tsx` — invitación completa
- `src/routes/__root.tsx` — añadir `<link>` de Google Fonts en `head.links`
- `src/styles.css` — paleta blueprint, fuentes, utilidades de textura

Confirma para construirlo (puedes pasarme fecha exacta y RSVP cuando los tengas; mientras tanto los pondré como placeholders claramente marcados).