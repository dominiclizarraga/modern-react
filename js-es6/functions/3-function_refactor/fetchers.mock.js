export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos recibidos");
    }, 1000);
  });
}

export function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        1: { name: "Alice", age: 22 },
        2: { name: "Bob", age: 25 },
      };
      const user = users[userId];
      if (user) {
        resolve(JSON.stringify(user));
      } else {
        reject("Usuario no encontrado");
      }
    }, 1000);
  });
}

export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Login exitoso");
      } else {
        reject("Credenciales incorrectas");
      }
    }, 1000);
  });
}

export function getUserInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.stringify({ name: "Admin", role: "superuser" }));
    }, 1000);
  });
}

export function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Datos recibidos correctamente");
      } else {
        reject("Error al recibir los datos");
      }
    }, 1000);
  });
}

export function fetchData1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos de la API 1");
    }, 1000);
  });
}

export function fetchData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos de la API 2");
    }, 1000);
  });
}
