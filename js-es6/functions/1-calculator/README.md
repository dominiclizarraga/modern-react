# Crear una calculadora básica

En este ejercicio, implementarás una función llamada `calculator` que realiza operaciones matemáticas básicas. Sigue los pasos indicados para completarlo correctamente.

## Requisitos

La función `calculator` debe:

1. Aceptar tres parámetros:
   - **`operation`** (string): El nombre o símbolo de la operación matemática. Puede ser:
     - Por nombre: `"suma"`, `"resta"`, `"multiplicacion"`, `"division"`.
     - Por símbolo: `"+"`, `"-"`, `"*"`, `"/"`.
   - **`num1`** (number): El primer número de la operación.
   - **`num2`** (number): El segundo número de la operación.
2. Usar un operador `switch` para determinar qué operación realizar.
3. Retornar el resultado de la operación correspondiente.
4. Manejar casos no válidos devolviendo un mensaje de error o `NaN`.

## Pasos para completar el ejercicio

1. **Crear un `switch` para manejar las operaciones**:
   - Dentro del `switch`, escribe un caso para cada operación:
     - `"suma"` o `"+"` para sumar.
     - `"resta"` o `"-"` para restar.
     - `"multiplicacion"` o `"*"` para multiplicar.
     - `"division"` o `"/"` para dividir.
2. **Verificar los parámetros**:
   - Asegúrate de que `num1` y `num2` sean números válidos.
   - Si la operación es `"division"` o `"/"`, verifica que `num2` no sea 0.
3. **Implementar un caso por defecto**:
   - Si el valor de `operation` no es válido, retorna un mensaje de error o `NaN`.
4. **Probar la función**:
   - Llama a la función con diferentes combinaciones de operaciones y números para verificar que los resultados sean correctos.

## Ejemplo de uso

```javascript
calculator("suma", 5, 3); // 8
calculator("*", 4, 2); // 8
calculator("division", 10, 2); // 5
calculator("-", 7, 3); // 4
calculator("mod", 5, 2); // NaN (o mensaje de error)
```
