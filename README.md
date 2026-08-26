# ByteForge Digital

Sitio web corporativo de una sola página (one-page) para **ByteForge Digital**,
una empresa colombiana ficticia de desarrollo de software y transformación
digital, creada con fines académicos y de demostración.

> "Convertimos desafíos en soluciones digitales"

## 📄 Descripción

Este proyecto presenta la página institucional de ByteForge Digital, incluyendo
su propuesta de valor, servicios, stack tecnológico, proceso de trabajo,
testimonios de clientes ficticios, preguntas frecuentes y un formulario de
contacto simulado. El sitio está construido íntegramente con **HTML5, CSS3 y
JavaScript puro (vanilla JS)**, sin frameworks ni librerías externas de UI.

## 🛠️ Tecnologías utilizadas

- **HTML5** — estructura semántica del sitio.
- **CSS3** — estilos, variables, animaciones y diseño responsive (Flexbox y Grid).
- **JavaScript (ES6+)** — interactividad: menú móvil, acordeón FAQ, validación de formulario y animaciones al hacer scroll.
- **Google Fonts** — tipografías Space Grotesk, Inter y JetBrains Mono.

## 📁 Estructura de carpetas

```
byteforge-digital/
│
├── index.html          # Estructura y contenido del sitio
├── README.md            # Este archivo
│
├── css/
│   └── styles.css       # Todos los estilos del sitio
│
└── js/
    └── main.js          # Toda la lógica de interactividad
```

## ✨ Funcionalidades

- Navegación fija con enlaces internos a cada sección (scroll suave).
- Menú de navegación responsive con botón de hamburguesa para móviles.
- Sección Hero con una consola de código animada (efecto de escritura tipo terminal).
- Ocho tarjetas de servicios con iconos, título y descripción, con efectos hover.
- Sección de tecnologías presentadas como etiquetas (chips) interactivas.
- Sección "¿Por qué elegirnos?" con seis ventajas competitivas.
- Línea de tiempo del proceso de trabajo (6 etapas).
- Tres testimonios ficticios de clientes.
- Acordeón de preguntas frecuentes (FAQ) que se abre y cierra con JavaScript.
- Formulario de contacto con validación básica en el cliente (nombre, correo,
  servicio de interés y mensaje) y mensaje de confirmación simulado — no envía
  datos a ningún servidor real.
- Animaciones de aparición (`reveal on scroll`) mediante `IntersectionObserver`.
- Diseño totalmente responsive: adaptado a celulares, tablets y computadores.
- Respeta la preferencia de accesibilidad `prefers-reduced-motion`.

## 🎨 Paleta de diseño

| Color | Uso | Valor |
|---|---|---|
| Azul oscuro | Color principal | `#0B1E3D` |
| Turquesa | Color de acento | `#2DD4BF` |
| Morado | Detalles y contrastes | `#7C5CFF` |
| Blanco / Gris claro | Fondos | `#FFFFFF` / `#F5F7FB` |

## 🚀 Cómo ejecutar el proyecto localmente

1. Descarga o clona este proyecto en tu computador.
2. Abre la carpeta `byteforge-digital` en **Visual Studio Code**.
3. Abre el archivo `index.html` directamente en tu navegador, **o** usa la
   extensión **Live Server** de VS Code para tener recarga automática:
   - Instala la extensión "Live Server" desde el marketplace de VS Code.
   - Haz clic derecho sobre `index.html` → **"Open with Live Server"**.
4. El sitio se abrirá en `http://127.0.0.1:5500` (o un puerto similar).

No se requiere instalar dependencias ni ejecutar comandos de compilación, ya
que el proyecto no utiliza ningún framework ni gestor de paquetes.

## 🌐 Cómo publicarlo con GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo, `byteforge-digital`).
2. Dentro de la carpeta del proyecto, inicializa git y sube el código:
   ```bash
   git init
   git add .
   git commit -m "Primer commit: sitio ByteForge Digital"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/byteforge-digital.git
   git push -u origin main
   ```
3. En GitHub, entra al repositorio y ve a **Settings → Pages**.
4. En la sección **Build and deployment**, selecciona:
   - **Source:** "Deploy from a branch"
   - **Branch:** `main` y carpeta `/ (root)`
5. Guarda los cambios y espera unos minutos. GitHub Pages publicará el sitio en:
   ```
   https://TU-USUARIO.github.io/byteforge-digital/
   ```

## 📌 Notas

- Todo el contenido (empresa, servicios, testimonios, datos de contacto) es
  **ficticio** y se creó únicamente con fines de demostración y aprendizaje.
- El formulario de contacto no envía información a ningún servidor; solo
  simula el envío mediante JavaScript y muestra un mensaje de confirmación.

---

© 2026 ByteForge Digital — Proyecto académico ficticio.
