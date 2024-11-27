export function calculator(operation, num1, num2) {
  const opr = operation;
  switch (opr) {
    case "suma":
    case "+":
      return  num1 + num2;
    case "resta":
    case "-":
      return  num1 - num2;
    case "multiplicacion":
    case "*":
      return  num1 * num2;
    case "division":
    case "/":
      return  num1 / num2;
    case "potencia":
    case "**":
      return  num1 ** num2;
    default:
      return `Operación no válida`;
  }

}
