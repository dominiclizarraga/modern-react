import { arilineBooker } from ".";

describe("arilineBooker", () => {
  test("Funcion arilineBooker debe existir", () => {
    expect(arilineBooker).toBeInstanceOf(Function);
  });

  test("debe retornar un objeto", () => {
    const avianca = arilineBooker("Avianca");
    expect(avianca).toBeInstanceOf(Object);
  });

  describe("listPassengers", () => {
    let avianca;
    beforeEach(() => {
      avianca = arilineBooker("Avianca");
    });
    test("debe retornar un array", () => {
      expect(avianca.listPassengers()).toBeInstanceOf(Array);
    });
    test("debe retornar un array vacio al lammarlo despues de crear", () => {
      expect(avianca.listPassengers()).toEqual([]);
    });
  });

  describe("RegisterPassenger", () => {
    let avianca;
    beforeEach(() => {
      avianca = arilineBooker("Avianca");
    });
    test("debe registrar un pasajero", () => {
      avianca.registerPassenger("John", 123);
      expect(avianca.listPassengers()).toEqual([
        { name: "John", flightNumber: 123, checkIn: false },
      ]);
    });
    test("debe retornar mensaje correcto", () => {
      expect(avianca.registerPassenger("John", 123)).toEqual(
        "Pasajero John registrado en el vuelo 123 de Avianca"
      );
    });
    test("debe evitar registros duplicados", () => {
      avianca.registerPassenger("John", 123);
      expect(avianca.listPassengers()).toEqual([
        { name: "John", flightNumber: 123, checkIn: false },
      ]);
    });
    test("debe retornar mensaje correcto si es duplicado", () => {
      avianca.registerPassenger("John", 123);
      expect(avianca.registerPassenger("John", 123)).toEqual(
        "Pasajero John ya registrado en el vuelo 123 de Avianca"
      );
    });
    test("debe registrar varios pasajeros", () => {
      avianca.registerPassenger("John", 123);
      avianca.registerPassenger("Doe", 123);
      expect(avianca.listPassengers().length).toEqual(2);
    });
  });

  describe("checkIn", () => {
    let avianca;
    beforeEach(() => {
      avianca = arilineBooker("Avianca");
    });
    test("debe realizar checkIn", () => {
      avianca.registerPassenger("John", 123);
      avianca.checkIn("John", 123);
      expect(avianca.listPassengers()).toEqual([
        { name: "John", flightNumber: 123, checkIn: true },
      ]);
    });
    test("debe retornar mensaje correcto", () => {
      avianca.registerPassenger("John", 123);
      expect(avianca.checkIn("John", 123)).toEqual(
        "CheckIn realizado para el pasajero John en el vuelo 123 de Avianca"
      );
    });
    test("debe evitar checkIn duplicados", () => {
      avianca.registerPassenger("John", 123);
      avianca.checkIn("John", 123);
      expect(avianca.listPassengers()).toEqual([
        { name: "John", flightNumber: 123, checkIn: true },
      ]);
    });
    test("debe retornar mensaje correcto si es duplicado", () => {
      avianca.registerPassenger("John", 123);
      avianca.checkIn("John", 123);
      expect(avianca.checkIn("John", 123)).toEqual(
        "Pasajero John ya realizo checkIn"
      );
    });
    test("debe evitar checkIn si no esta registrado", () => {
      expect(avianca.checkIn("John", 123)).toEqual(
        "Pasajero John no registrado en el vuelo 123 de Avianca"
      );
    });
  });

  describe("deletePassenger", () => {
    let avianca;
    beforeEach(() => {
      avianca = arilineBooker("Avianca");
    });
    test("debe eliminar pasajero", () => {
      avianca.registerPassenger("John", 123);
      avianca.deletePassenger("John", 123);
      expect(avianca.listPassengers()).toEqual([]);
    });
    test("debe retornar mensaje correcto", () => {
      avianca.registerPassenger("John", 123);
      expect(avianca.deletePassenger("John", 123)).toEqual(
        "Pasajero John eliminado del vuelo 123 de Avianca"
      );
    });
    test("debe evitar eliminar si ya realizo checkIn", () => {
      avianca.registerPassenger("John", 123);
      avianca.checkIn("John", 123);
      expect(avianca.deletePassenger("John", 123)).toEqual(
        "Pasajero John ya realizo checkIn"
      );
    });
    test("debe evitar eliminar si no esta registrado", () => {
      expect(avianca.deletePassenger("John", 123)).toEqual(
        "Pasajero John no registrado en el vuelo 123 de Avianca"
      );
    });
  });
});
