# Convertir funciones de `.then()` a `async/await`

En este ejercicio, aprenderás a convertir funciones que utilizan el enfoque basado en promesas con `.then()` y `.catch()` al formato moderno de `async/await`. Este cambio hará que tu código sea más legible y fácil de mantener.

## Objetivos

1. **Transformar funciones** basadas en promesas para que usen `async/await`.
2. **Retornar valores** desde las funciones en lugar de solo imprimir resultados en consola.
3. **Manejar errores correctamente** usando bloques `try/catch`.

## Pasos a seguir

1. **Lee el código inicial**: Identifica las cadenas de `.then()` y `.catch()` en las funciones proporcionadas.
2. **Convierte las promesas a `async/await`**:
   - Agrega la palabra clave `async` a la función.
   - Usa `await` para esperar la resolución de las promesas.
   - Asegúrate de retornar los datos procesados desde la función.
3. **Manejo de errores**:
   - Implementa un bloque `try/catch` para capturar y manejar errores.
   - Asegúrate de que los errores sean tratados de forma adecuada.
4. **Revisa el comportamiento**: Verifica que las funciones convertidas mantengan el mismo comportamiento que las versiones originales.
