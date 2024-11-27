# Crear una función para manejar reservaciones de vuelos

En este ejercicio, implementarás una función llamada `airlineBooker` que generará un objeto para manejar las reservaciones de una aerolínea específica. El objetivo es usar **closures** para manejar la lista de pasajeros sin incluirla como una propiedad del objeto retornado.

## Requisitos

La función `airlineBooker` debe:

1. Recibir un parámetro `airline` (nombre de la aerolínea).
2. Retornar un objeto con los siguientes métodos:
   - **`listPasajeros`**:
     - Retorna un arreglo con los pasajeros registrados.
   - **`registrarPasajero`**:
     - Recibe el nombre del pasajero y el número de vuelo.
     - Persiste los datos en el formato:
       ```javascript
       [{ nombre: "Sebas", numeroDeVuelo: 123, checkIn: false }, {...}]
       ```
     - Retorna un mensaje:
       - `"Pasajero Sebas registrado en el vuelo 123 de Avianca"`
       - `"Pasajero Sebas ya registrado en el vuelo 123 de Avianca"` si el pasajero ya existe en ese vuelo.
   - **`checkIn`**:
     - Recibe el nombre del pasajero y el número de vuelo.
     - Cambia el estado de `checkIn` a `true`.
     - Retorna un mensaje:
       - `"CheckIn realizado para el pasajero Sebas en el vuelo 123 de Avianca"`
       - `"Pasajero Sebas ya realizó checkIn"` si ya estaba marcado.
   - **`eliminarPasajero`**:
     - Recibe el nombre del pasajero y el número de vuelo.
     - Elimina al pasajero si no ha realizado `checkIn`.
     - Retorna un mensaje:
       - `"Pasajero Sebas eliminado del vuelo 123 de Avianca"`
       - `"Pasajero Sebas ya realizó checkIn"` si no se puede eliminar.

## Consideraciones

- **Usar closures**: La lista de pasajeros debe estar almacenada en una variable interna dentro de la función `airlineBooker`, no como una propiedad del objeto retornado.
- **Evitar mutaciones innecesarias**: Los métodos deben modificar solo los datos necesarios en la lista de pasajeros.
- **Validaciones**: Implementa las validaciones necesarias para garantizar que las operaciones se realicen correctamente (por ejemplo, evitar registros duplicados, eliminar pasajeros inexistentes, etc.).

## Pasos para implementar la función

1. **Definir una variable para la lista de pasajeros**:

   - Dentro de la función `airlineBooker`, crea un arreglo vacío llamado `passengers` que almacenará los datos de los pasajeros.

2. **Implementar el método `listPasajeros`**:

   - Retorna directamente el arreglo `passengers`.

3. **Implementar el método `registrarPasajero`**:

   - Verifica si ya existe un pasajero con el mismo nombre y número de vuelo en el arreglo.
   - Si no existe, agrega un nuevo objeto con las propiedades `nombre`, `numeroDeVuelo` y `checkIn` (inicialmente en `false`).
   - Retorna el mensaje correspondiente.

4. **Implementar el método `checkIn`**:

   - Busca al pasajero por `nombre` y `numeroDeVuelo`.
   - Si existe y no ha realizado el `checkIn`, actualiza el estado a `true`.
   - Retorna el mensaje correspondiente.

5. **Implementar el método `eliminarPasajero`**:
   - Busca al pasajero por `nombre` y `numeroDeVuelo`.
   - Si no ha realizado `checkIn`, elimina al pasajero del arreglo.
   - Retorna el mensaje correspondiente.

## Ejemplo de uso

```javascript
const avianca = airlineBooker("Avianca");

// Registrar pasajeros
console.log(avianca.registrarPasajero("Sebas", 123)); // "Pasajero Sebas registrado en el vuelo 123 de Avianca"
console.log(avianca.registrarPasajero("Sebas", 123)); // "Pasajero Sebas ya registrado en el vuelo 123 de Avianca"

// Listar pasajeros
console.log(avianca.listPasajeros());
// [{ nombre: "Sebas", numeroDeVuelo: 123, checkIn: false }]

// Realizar checkIn
console.log(avianca.checkIn("Sebas", 123)); // "CheckIn realizado para el pasajero Sebas en el vuelo 123 de Avianca"
console.log(avianca.checkIn("Sebas", 123)); // "Pasajero Sebas ya realizó checkIn"

// Eliminar pasajero
console.log(avianca.eliminarPasajero("Sebas", 123)); // "Pasajero Sebas ya realizó checkIn"
```
