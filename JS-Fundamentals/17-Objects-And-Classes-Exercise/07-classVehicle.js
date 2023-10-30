class Vehicle { // vehicle class is defined by a constructor that takes 4 parameters
    constructor(type, model, parts, fuel) {
        this.type = type
        this.model = model
        this.parts = parts
        this.parts.quality = parts.engine * parts.power
        this.fuel = fuel

    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200); // this is the instance created from the Vehicle class
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

