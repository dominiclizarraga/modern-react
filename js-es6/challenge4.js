function airlineBooker(airline) {
  const passengers = [];

  return {
    listPasajeros: function() {
      return passengers;
    },

    registrarPasajero: function (nombre, vuelo) {
      const existingPassenger = passengers.find((passenger) => {
        return passenger.nombre === nombre && passenger.vuelo === vuelo;
      });

      if (existingPassenger) {
        return `Pasajero ${nombre} ya registrado en el vuelo ${vuelo} de ${airline}`
      }

      const newPass = {
        nombre: nombre,
        vuelo: vuelo,
        checkIn: false
      }

      passengers.push(newPass);

      return `Pasajero ${nombre} registrado en el vuelo ${vuelo} de ${airline}`;
    },

    checkIn: function (nombre, vuelo) {
      const checkInPassenger = passengers.find((passenger) => {
        return passenger.nombre === nombre && passenger.vuelo === vuelo;
      });

      if (!checkInPassenger) {
        return `Pasajero ${nombre} no encontrado en el vuelo ${vuelo}`;
      }

      if (checkInPassenger.checkIn) {
        return `Pasajero ${nombre} ya realizó checkIn`;
      };

      checkInPassenger.checkIn = true;
      return `CheckIn realizado para el pasajero ${nombre} en el vuelo ${vuelo} de ${airline}`;
    },

    eliminarPasajero: function (nombre, vuelo) {
      const passengerWithIndex = passengers.findIndex((passenger) => {
        return passenger.nombre === nombre && passenger.vuelo === vuelo;
      });

      if (passengerWithIndex === -1) {
        return `Pasajero ${nombre} no encontrado en el vuelo ${vuelo}`;
      }

      if (passengers[passengerWithIndex].checkIn) {
        return `No se puede eliminar al pasajero ${nombre} porque ya realizó checkIn`;
      };

      passengers.splice(passengerWithIndex, 1);
      return `Pasajero ${nombre} eliminado del vuelo ${vuelo}`;
    }
  }
}

const avianca = airlineBooker("Avianca")
console.log(avianca.registrarPasajero('Sebas', 120));
console.log(avianca.registrarPasajero('Susana', 134));
console.log(avianca.registrarPasajero('Sebas', 120));
console.log(avianca.checkIn('Sebas', 120));
console.log(avianca.checkIn('Sebas', 120));

console.log(avianca.eliminarPasajero('Julio', 120)); // not found returns -1
console.log(avianca.eliminarPasajero('Sebas', 120)); // has checkIn = true
console.log(avianca.eliminarPasajero('Susana', 134)); // has checkIn = false



console.log(`all passengers:`, avianca.listPasajeros());



