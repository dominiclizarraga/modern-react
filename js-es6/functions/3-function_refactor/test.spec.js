import {
  asyncFetchData,
  asyncFetchData1,
  asyncGetData,
  asyncGetUser,
  asyncLogin,
} from ".";

describe("Async functions", () => {
  describe("asyncFetchData", () => {
    it("Debe retornar la data recibida por fetchData", async () => {
      const result = await asyncFetchData();
      expect(result).toBe("Datos recibidos");
    });
  });

  describe("asyncFetchData1", () => {
    it("Debe retornar un usuario si existe con su id", async () => {
      const result = await asyncGetUser(1);
      expect(result).toEqual({ name: "Alice", age: 22 });
    });
    it("Debe retornar un error si el usuario no existe", async () => {
      try {
        await asyncGetUser(3);
      } catch (error) {
        expect(error).toBe("Usuario no encontrado");
      }
    });
  });

  describe("asyncLogin", () => {
    it("Debe retornar la informacion del usuario si las credenciales son correctas", async () => {
      const result = await asyncLogin("admin", "1234");
      expect(result).toEqual({ name: "Admin", role: "superuser" });
    });

    it("Debe lanzar un error si las credenciales son incorrectas", async () => {
      try {
        await asyncLogin("admin", "11111");
      } catch (err) {
        expect(err).toBe("Credenciales incorrectas");
      }
    });
  });

  describe("asyncGetUser", () => {
    it("Debe retornar la informacion del usuario", async () => {
      const result = await asyncGetUser(1);
      expect(result).toEqual({ name: "Alice", age: 22 });
    });

    it("Debe lanzar un error si el usuario no existe", async () => {
      try {
        await asyncGetUser(3);
      } catch (err) {
        expect(err).toBe("Usuario no encontrado");
      }
    });
  });
});
