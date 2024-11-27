const students = [
  { id: 1, name: 'Juan', age: 20, grade: 2 },
  { id: 2, name: 'Nicolas', age: 22, grade: 6 },
  { id: 3, name: 'Agustín', age: 23, grade: 8 },
  { id: 4, name: 'David', age: 21, grade: 4 },
  { id: 5, name: 'Camila', age: 20, grade: 3.5 }
];

const addStatusToStudents = (students) => {
  const gradedStudents = students.map((student) => {
    if (student.grade >= 4) {
      student.status = "aprobado"
    } else {
      student.status = "desaprobado"
    }
    return student
  })
  return gradedStudents
}

console.log(students)
console.log(addStatusToStudents(students))
const approvedStudents = addStatusToStudents(students).filter((student) => student.status === "aprobado" )
console.log(approvedStudents)
const unapprovedStudents = addStatusToStudents(students).filter((student) => student.status === "desaprobado" )
console.log(unapprovedStudents)
