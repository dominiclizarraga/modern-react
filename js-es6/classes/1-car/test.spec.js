import { Car } from ".";

describe("Car", () => {
  test("Car debe existir", () => {
    expect(Car).toBeInstanceOf(Function);
  });

  test("debe retornar un objeto", () => {
    const car = new Car("Tesla");
    expect(car).toBeInstanceOf(Object);
  });

  test("debe tener los atributos correctos", () => {
    test("Make debe ser el argumento que le pasamos", () => {
      const car1 = new Car("Tesla");
      const car2 = new Car("Toyota");
      const car3 = new Car("Ford");
      expect(car1.make).toEqual("Tesla");
      expect(car2.make).toEqual("Toyota");
      expect(car3.make).toEqual("Ford");
    });

    test("Speed debe inicializar en 0", () => {
      const car = new Car("Tesla");
      expect(car.speed).toEqual(0);
    });
  });

  test("No podemos modificar make y speed de manera directa", () => {
    const car = new Car("Tesla");
    car.make = "Toyota";
    car.speed = 100;
    expect(car.make).toEqual("Tesla");
    expect(car.speed).toEqual(0);
  });

  test("Metodo accelerate aumenta la velocidad", () => {
    const car = new Car("Tesla");
    car.accelerate(50);
    expect(car.speed).toEqual(50);
    car.accelerate(20);
    expect(car.speed).toEqual(70);
  });

  test("Metodo brake disminuye la velocidad", () => {
    const car = new Car("Tesla");
    car.accelerate(50);
    car.brake(20);
    expect(car.speed).toEqual(30);
    car.brake(10);
    expect(car.speed).toEqual(20);
  });

  test("Metodo brake no puede dejar la velocidad en negativo", () => {
    const car = new Car("Tesla");
    car.accelerate(50);
    car.brake(60);
    expect(car.speed).toEqual(0);
  });
});
