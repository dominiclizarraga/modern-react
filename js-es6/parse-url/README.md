## Ejercicio

#### Transformador de urls

Una tarea común que tenemos los devs es manipular las urls. Esto nos puede servir para crear [breadcrums](https://es.wikipedia.org/wiki/Miga_de_pan_(inform%C3%A1tica)), para setear el estado activo de un link de nuestra navbar, etc.

Para este ejercicio debes crear una función que reciba un `string` como argumento y debe devolver un `array` que contenga cada segmento de nuestra url por separado. Por ejemplo:

Input: `/en-US/docs/Web/API/URL/pathname`
Output: `['en-US', 'docs', 'Web', 'API', 'URL', 'pathname']`

```javascript
function parseURL(urlString) {
    // Tu codigo acá
}

const segmentsArray = parseURL(`/en-US/docs/Web/API/URL/pathname`);
console.log(segmentsArray) // ["en-US", "docs", "Web", "API", "URL", "pathname"]

```

#### Extra
El metodo `window.location.pathname` te devolverá un string con el pathname de la url en la que te encuentras parado. Puedes probar tu nueva función `parseURL` en cualquier sitio utilizando este metodo en la consola del navegador.
