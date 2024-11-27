import { calculator } from ".";

describe("calculator", () => {
  test("Funcion calculator debe existir", () => {
    expect(calculator).toBeInstanceOf(Function);
  });

  test("suma", () => {
    expect(calculator("suma", 120, 50)).toEqual(170);
    expect(typeof calculator("suma", 120, 50)).toEqual("number");
    expect(calculator("+", 130, 20)).toEqual(150);
    expect(typeof calculator("+", 130, 20)).toEqual("number");
  });
  test("resta", () => {
    expect(calculator("resta", 120, 50)).toEqual(70);
    expect(typeof calculator("resta", 120, 50)).toEqual("number");
    expect(calculator("-", 20, 130)).toEqual(-110);
    expect(typeof calculator("-", 130, 20)).toEqual("number");
  });
  test("multiplicacion", () => {
    expect(calculator("multiplicacion", 10, 5)).toEqual(50);
    expect(typeof calculator("multiplicacion", 10, 5)).toEqual("number");
    expect(calculator("*", 131, 22)).toEqual(2882);
    expect(typeof calculator("*", 131, 22)).toEqual("number");
  });
  test("division", () => {
    expect(calculator("division", 20, 5)).toEqual(4);
    expect(typeof calculator("division", 20, 5)).toEqual("number");
    expect(calculator("/", 128, 8)).toEqual(16);
    expect(typeof calculator("/", 128, 8)).toEqual("number");
  });
  test("potencia", () => {
    expect(calculator("potencia", 13, 4)).toEqual(28561);
    expect(typeof calculator("potencia", 20, 5)).toEqual("number");
    expect(calculator("**", 128, 8)).toEqual(72057594037927940);
    expect(typeof calculator("**", 128, 8)).toEqual("number");
  });
  test("Operador invalido", () => {
    expect(calculator("=", 20, 5)).toEqual("Operación no válida");
    expect(typeof calculator("=", 20, 5)).toEqual("string");
  });
});
