export class Car {
  #make
  #speed

  constructor(make) {
    this.#make = make
    this.#speed = 0
  }

  get make() {
    return this.#make
  }

  get speed() {
    return this.#speed
  }

  // set make(newMake) {
  //   return this.#make = newMake
  // }

  // set speed(newSpeed) {
  //   return this.#speed = newSpeed
  // }

  accelerate(velocity) {
    let newSpeed = this.#speed += velocity
    return newSpeed;
  }

  brake(reduceVelocity) {
    this.#speed -= reduceVelocity
    if (this.#speed <= 0) {
      this.#speed = 0
    }
    return this.#speed
  }
}

const car = new Car("Tesla");
car.make = "Toyota";
car.speed = 100;
console.log(car.make)
console.log(car.speed)
