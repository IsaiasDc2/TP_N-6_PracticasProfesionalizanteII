# TP6 — React

Trabajo práctico N°6 desarrollado con **React** y **Vite**, que explora la construcción de componentes reutilizables, manejo de estado y formularios.

---

##  Tecnologías

| Tecnología | Descripción |

| [React](https://react.dev/) | Biblioteca para construir interfaces de usuario |
| [Vite](https://vitejs.dev/) | Bundler y servidor de desarrollo ultrarrápido |
| CSS | Estilos personalizados por componente |

---

## Instalación y uso

### Requisitos previos

- Node.js v18 o superior
- npm v9 o superior

### Pasos

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd tp6-react

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con hot-reload |
| `npm run build` | Genera el build de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción localmente |

---

## Componentes

### `Header`
Encabezado principal de la aplicación. Muestra el título y/o navegación del sitio.

### `Footer`
Pie de página de la aplicación. Contiene información de cierre como créditos o enlaces.

### `Card`
Componente de tarjeta reutilizable para mostrar contenido de forma encapsulada (título, descripción, imagen, etc.).

### `Contador`
Componente interactivo que gestiona un estado numérico con acciones para incrementar, decrementar y reiniciar el valor.

### `ContactForm`
Formulario de contacto con campos controlados (nombre, email, mensaje) y validación básica de entradas.

### `ProductList`
Lista dinámica de productos. Renderiza una colección de ítems a partir de un array de datos, usando el componente `Card` internamente.

### `TodoApp`
Aplicación de lista de tareas con funcionalidades para agregar, marcar como completadas y eliminar tareas. Gestiona su propio estado con `useState`.

---

##  Estructura del proyecto

```
tp6-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Card/
│   │   ├── Contador/
│   │   ├── ContactForm/
│   │   ├── ProductList/
│   │   └── TodoApp/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

##  Autor

Isaias Ramses Casasola Duran 

---

## Fotos del Sitio
![Header](https://github.com/IsaiasDc2/TP_N-6_PracticasProfesionalizanteII/blob/33182a7ebeba0c1a618f22af1fa5d97c233a8fb7/src/imagenes/Captura%20de%20pantalla%202026-05-17%20215517.png)

---

![Contador](https://github.com/IsaiasDc2/TP_N-6_PracticasProfesionalizanteII/blob/0b902387a5381021610df794d3909fbfc3fc8a87/src/imagenes/Captura%20de%20pantalla%202026-05-17%20215546.png)

---

![ContactForm](https://github.com/IsaiasDc2/TP_N-6_PracticasProfesionalizanteII/blob/d46073168c9c9f6fdd9e2e16bc97bb92d26bf197/src/imagenes/Captura%20de%20pantalla%202026-05-17%20215729.png)

---
