## Ejercicio

#### ¿Aprobado o desaprobado?

En este ejercicio deberás crear una función que recibirá un array de alumnos con sus respectivas notas, y debes agregarle a cada uno una nueva propiedad `status` con el valor `aprobado` o `desaprobado` dependiendo del valor de su nota.

Criterios:

- Si es mayor o igual a 4 deberá ser `aprobado`, sino el alumno estará `desaprobado`.
- No debes modificar el array original

```javascript
const students = [
    { id: 1, name: 'Juan', age: 20, grade: 2 },
    { id: 2, name: 'Nicolas', age: 22, grade: 6 },
    { id: 3, name: 'Agustín', age: 23, grade: 8 },
    { id: 4, name: 'David', age: 21, grade: 4 },
    { id: 5, name: 'Camila', age: 20, grade: 3.5 }
];

const addStatusToStudents = (students) => {
    // Tu codigo acá
    // Recuerda el metodo .map que hemos visto en la clase.
}
```

#### Extra
Por ultimo puedes crear 2 variables nuevas que almacenen a los alumnos aprobados y desaprobados. Recuerda que puedes utilizar el metodo `.filter()`
