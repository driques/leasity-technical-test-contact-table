# <img width="231" height="223" alt="full-gradient-large" src="https://github.com/user-attachments/assets/7a47ee23-94fa-4d08-9dff-5ecf8a140b1c" />
Leasify Technical Test - Contact Table

Este proyecto corresponde a la prueba técnica realizada para Leasity, donde se implementa una tabla de contactos con edición y manejo de datos.

El objetivo principal fue demostrar buenas prácticas en Angular 20, arquitectura limpia, componentes reutilizables, y una UI moderna con TailwindCSS.

---

## Tecnologías y Herramientas

- **Angular 20**: Framework principal para la aplicación.
- **TailwindCSS**: Estilización moderna y responsive.
- **TypeScript**: Tipado fuerte y buenas prácticas.
- **Vite**: Bundler para desarrollo rápido.
- **Google Fonts**: Fuente `HKGroteskPro` aplicada globalmente.
- **Lucide Icons**: Uso de iconografía moderna para acciones (editar, ver detalle).
- **Favicon y branding de Leasity**: Aplicado en la app.

---

## Arquitectura y Patrones

- **Arquitectura limpia**: Separación de responsabilidades entre componentes, servicios y modelos.
- **Componente padre/hijo**: `ContactsComponent` gestiona la tabla y el sidebar.
- **Sidebar editable**: `SidebarComponent` permite editar información del contacto y comunicar cambios al componente padre mediante `@Output`.
- **Composición y reusabilidad**:
  - `InputFieldComponent`: Componente reutilizable para campos de formulario con binding bidireccional.
  - `SidebarComponent`: Componente independiente y reutilizable.
- **Servicios**: `ContactsService` simula fetching de datos desde un endpoint (API mock).
- **Observable y manejo de errores**: Uso de `RxJS` y `catchError` para manejo de respuestas de la API.

---

## Funcionalidades

- **Listado de contactos**: Visualización de datos con tabla y tags.
- **Edición de contacto**:
  - Sidebar con inputs dinámicos.
  - Comunicación de cambios al componente padre.
- **Creación de nuevo contacto**: Posibilidad de agregar un contacto desde el sidebar.
- **Estilos modernos**: TailwindCSS aplicado en tablas, botones, inputs y sidebar.
- **Iconografía**: Iconos de acción (lapiz para editar) usando Lucide Angular.
- **Responsive**: Sidebar y tabla adaptables a diferentes resoluciones.
- **Tipografía personalizada**: Fuente corporativa `HKGroteskPro`.

---
