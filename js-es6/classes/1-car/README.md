# Definir una clase `Carro`

En este ejercicio, se debe crear una clase llamada `Carro` que cumpla con las siguientes especificaciones:

### Requisitos de la clase

1. **Propiedad `make` (marca):**

   - Debe ser pasada como argumento al momento de crear una instancia de la clase.
   - No puede ser modificada directamente una vez que se ha establecido.

2. **Propiedad `speed` (velocidad):**

   - Debe inicializarse con un valor de `0` al crear la instancia.
   - No puede ser modificada directamente.

3. **Acceso a las propiedades:**

   - Tanto `make` como `speed` deben ser accesibles mediante métodos o propiedades de solo lectura.

4. **Métodos:**
   - `accelerate(valor)`: Incrementa la velocidad actual por el valor proporcionado y retorna la nueva velocidad.
   - `brake(valor)`: Reduce la velocidad actual por el valor proporcionado y retorna la nueva velocidad.
     - La velocidad no debe ser negativa (puede ser 0 como mínimo).
   - `info()`: Retorna una cadena con el formato:
     `"Car <marca> is going at <velocidad> km/h."`

### Ejemplo de Uso

```javascript
const myCar = new Carro("Toyota");

// Acceder a las propiedades:
console.log(myCar.make); // Toyota
console.log(myCar.speed); // 0

// Usar los métodos:
myCar.accelerate(20); // Incrementa la velocidad a 20 km/h
myCar.brake(5); // Reduce la velocidad a 15 km/h
console.log(myCar.info()); // Car Toyota is going at 15 km/h.
```
