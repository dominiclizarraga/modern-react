// convertir las siguientes funciones asincronas de .then usando el formato de async await

import {
  fetchData,
  fetchData1,
  fetchData2,
  getData,
  getUser,
  getUserInfo,
  login,
} from "./fetchers.mock";

// 1)
fetchData()
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });

export const  asyncFetchData = async() => {
  try {
    const data = await fetchData()
    console.log(data);
    return data
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 2)
getUser(1)
  .then((user) => {
    console.log("Usuario encontrado:", user);
    return JSON.parse(user);
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });

export const asyncGetUser = async () => {
  try {
    const user = await getUser(1)
    const data = await JSON.parse(user);
    return data
  } catch (error) {
    return `Credenciales incorrectas`
  }
};

// 3) si las credenciales son incorrectas levantara un error
login("admin", "1234")
  .then((message) => {
    console.log(message);
    return getUserInfo();
  })
  .then((userInfo) => {
    console.log("Información del usuario:", userInfo);
    return userInfo;
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });

export const asyncLogin = async (user, password) => {
  try {
    const resp = await login(user, password)
    const userInfo = await getUserInfo()
    return JSON.parse(userInfo);
  } catch (error) {
    throw error;
  }
};

// 4) manejo de errores

getData()
  .then((data) => {
    console.log(data);
    return { data };
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });

export const asyncGetData = () => {
  // tu ccodigo aqui
};

// 5)

fetchData1()
  .then((data1) => {
    console.log(data1);
    return fetchData2();
  })
  .then((data2) => {
    console.log(data2);
    return data2;
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });

export const asyncFetchData1 = async () => {
  try {
    const resp1 = await fetchData1()
    if (!resp1.ok) {
      throw new Error(`Response HTTP was not ok, it was ${resp1.status}`)
    }
    const resp2 = await fetchData2()
    if (!resp2.ok) {
      throw new Error(`Response HTTP was not ok, it was ${resp2.status}`)
    }
    const data = await resp2.json();
    return data
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// crear una funcion para realizar fetch utilizando async await, 
// debe recibir un string(url) retornar la respuesta o el error

const fetcherFn = async (url) => {
  if (typeof url !== 'string') {
    throw new Error('URL must be a string');
  }

  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const data = await resp.json();
    return data;
  } catch (error) {
    throw error;
  }
};
