### Ejercicio

**Ahora es tu turno!**
Continuando con la app que creamos en la clase anterior, vamos a agregarle funcionalidades que vimos en esta segunda clase de React Basics.
El objetivo será mejorar nuestra applicación anterior para lograr algo similar a este ejemplo:

![](https://wagon-public-assets.s3.eu-west-3.amazonaws.com/0hpjkhln5h1nlda2apzext397lpv)

#### Requisitos

- Agregar formulario que reciba Nombre y Autor.
- Validar que no haya campos vacíos.
- Al agregar la quote exitosamente, debe limpiar los campos.
- Agregar listado de quotes.
- El listado debe cargar los datos de una API de quotes (ver sección de recursos).
- La API devuelve a los nombres de los autores con una marca de agua  -*type.fit*-, busca el método de formatear el autor para quitarle esta marca.
- Debe permitir eliminar quotes mediante un boton.
- Al clickear en cualquier card de las quotes se debe setear esa quote como destacada.
- Intenta estilar tu aplicación y saca a flote tu creatividad!

#### Recursos y aclaraciones

- Para estilar puedes utilizar Tailwind, CSS, Sass o la tecnología/método que desees.
- Para las **Quotes**, debes registarte en [API Ninjas](https://api-ninjas.com/api/quotes):
  - Link para [registarse](https://api-ninjas.com/register). **Es gratuita, pero debes validar el email.** 
  - Tu **API Key** estará en la [sección de API](https://api-ninjas.com/profile)

A continuación un paso a paso:

![](https://wagon-public-assets.s3.eu-west-3.amazonaws.com/1po3jqs6ncfdr6fjphp3hpcwzo5i)

![](https://wagon-public-assets.s3.eu-west-3.amazonaws.com/jmp1cifqlilz8lo0lzeshg8on4k0)

![](https://wagon-public-assets.s3.eu-west-3.amazonaws.com/0dnrr1xdjhq3ss3pe2ls097kuyhm)

---

#### Solo para valientes 💪🏻

Si has estado atento, en el gif de la app finalizada se puede ver que al recargar la pagina las quotes quedan almacenadas (tanto las de la API como las propias que creamos). Esto se logra gracias a [localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage).

*¿Te animas a implementar la carga y el guardado del listado en localStorage?*
