// repeat the Vehicle example. Note: Default miles = 0 and default owner
class Vehicle {
    constructor(make, model, miles = 0, owner = "") {
        this.make = make;
        this.model = model;
        this.miles = miles;
        this.owner = owner;
    }
}

let justBuiltCar = new Vehicle("Ford", "F-150");

let abandonedCar = new Vehicle("Ford","F-150", 997645);

let deesCar = new Vehicle("Chevy", "Impala", 22000, "Dee");

let cars = [justBuiltCar, abandonedCar, deesCar];

for (let i = 0; i < cars.length; i++) {
    let owner = cars[i].owner;
    if (owner == "") {
        owner = "no one";
    }

    console.log(cars[i].model + " is owned by " + owner + " (miles: " + cars[i].miles + ")");
}