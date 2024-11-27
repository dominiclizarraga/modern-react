# Ejercicio

Hola, bienvenidos a la sección de ejercicios de React Advanced 2!
Espero que te haya gustado todo lo que hemos visto de Next.js y cómo utilizando este framework de **React** podemos sacarle jugo a los beneficios del servidor y del cliente.
En esta ocasión estaremos utilizando la api de Rick and Morty: `https://rickandmortyapi.com/documentation/#rest` para consumir información y crear nuestra app de Next, la cual debe cumplir los siguienter requisitos:

## Requisitos

- Debes estilar con tailwind.
- El Layout debe mostrar algún titlo o header que se compartirá entre todas las pages.
- El index debe fetchear la data de la api y mostrarle en una grilla de cards.

## Card:

- Cada `Card` debe mostrar la imagen (utilizando el componente `Image` de Nextjs), el nombre, la especie y el género del personaje.
- Al clickear la card debe llevarnos a una página de detalle (ver componente `Link` de Next.js).

## Detalle de personaje (Ruta dinámica):
- Debe fetchear la data de cada personaje individual (utiliza el id de los parámetros).
- Debe tener un boton para volver al inicio
- Debe tener un componente Table

## Table
- Debe mostrar `status`, `specie` y `gender`.
- Debe tener un botón que al clickearlo se muestren 2 datos más: `origin` y `location`.
- Se debe poder mostrar y ocultar esta data extra mediante un estado (componente de cliente).

## Recursos y aclaraciones

- [Docs de tailwind](https://tailwindcss.com/docs/installation)
- [Link con componentes prearmados de Tailwind:](https://www.creative-tim.com/twcomponents)
- [Docs de Next](https://nextjs.org/docs)
- Sientete libre de crear la cantidad que quieras de componentes y sub componentes.
- Puedes agregar cualquier funcionalidad que quieras (filtrado, agregado de favoritos, etc). Mientras más investigues y ejercites mejor!


