export function arilineBooker(airline) {
  const passengers = [];

  return {
    listPassengers: function() {
      return passengers;
    },

    registerPassenger: function (name, flightNumber) {
      const existingPassenger = passengers.find((passenger) => {
        return passenger.name === name && passenger.flightNumber === flightNumber;
      });

      if (existingPassenger) {
        return `Pasajero ${name} ya registrado en el vuelo ${flightNumber} de ${airline}`
      }

      const newPass = {
        name: name,
        flightNumber: flightNumber,
        checkIn: false
      }

      passengers.push(newPass);
      return `Pasajero ${name} registrado en el vuelo ${flightNumber} de ${airline}`;
    },

    checkIn: function (name, flightNumber) {
      const checkInPassenger = passengers.find((passenger) => {
        return passenger.name === name && passenger.flightNumber === flightNumber;
      });

      if (!checkInPassenger) {
        return `Pasajero ${name} no registrado en el vuelo ${flightNumber} de ${airline}`;
      }

      if (checkInPassenger.checkIn) {
        return `Pasajero ${name} ya realizo checkIn`;
      };

      checkInPassenger.checkIn = true;
      return `CheckIn realizado para el pasajero ${name} en el vuelo ${flightNumber} de ${airline}`;
    },

    deletePassenger: function (name, flightNumber) {
      const passengerWithIndex = passengers.findIndex((passenger) => {
        return passenger.name === name && passenger.flightNumber === flightNumber;
      });

      if (passengerWithIndex === -1) {
        return `Pasajero ${name} no registrado en el vuelo ${flightNumber} de ${airline}`;
      }

      if (passengers[passengerWithIndex].checkIn) {
        return `Pasajero ${name} ya realizo checkIn`;
      };

      passengers.splice(passengerWithIndex, 1);
      return `Pasajero ${name} eliminado del vuelo ${flightNumber} de ${airline}`;
    }
  }
}
