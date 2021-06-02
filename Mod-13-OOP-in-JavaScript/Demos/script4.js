"use strict"


//class Vehicle
class Vehicle {
    constructor(make, model, miles, owner) {
        this.make = make;
        this.model = model;
        this.miles = miles;
        this.owner = owner;
    }
}
// make, model, miles owner
// create 3 diff vehicles owned by three diff people

let travsCar = new Vehicle("BMW","328i",66000,"Travis");
let justinsCar = new Vehicle("Infiniti","G37x",69000,"Justin");
let tanilCar = new Vehicle("Toyota","Corolla",100000,"Tanil")


// let travsCar = new Vehicle();
// travsCar.make = "BMW";
// travsCar.model = "328i";
// travsCar.miles = 66000;
// travsCar.owner = "Travis"

// let justinsCar = new Vehicle();
// justinsCar.make = "Infiniti";
// justinsCar.model = "G37x";
// justinsCar.miles = 69000;
// justinsCar.owner = "Justin"

// let tanilCar = new Vehicle();
// tanilCar.make = "Toyota";
// tanilCar.model = "Corolla";
// tanilCar.miles = 100000;
// tanilCar.owner = "Tanil"

// create class

// loop through and print the model and the owner

let vehicles = [travsCar, justinsCar, tanilCar];

for (let i = 0; i < vehicles.length; i++) {
    console.log(vehicles[i].model + " is owned by " + vehicles[i].owner);
}