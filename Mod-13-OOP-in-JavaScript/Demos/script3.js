"use strict"

// build Cat (CLASS -- DATA TYPE)
// name. age, primary color

class Cat {
    constructor(name, age, mainColor) {
        this.name = name;
        this.age = age;
        this.primaryColor = mainColor;
    }
}

let travsFirstCat = new Cat("Oreo",21,"Grey");
let kirksFirstCat = new Cat("Tigger",15,"Orange");
let casFirstCat = new Cat("Midnight",21,"Black");

let cats = [travsFirstCat, kirksFirstCat, casFirstCat];

for(let i = 0; i < cats.length; i++) {
    console.log(cats[i].name);
}

// let travsFirstCat = new Cat();
// travsFirstCat.name = "Oreo";
// travsFirstCat.age = 21;
// travsFirstCat.primaryColor = "Grey"

// let kirksFirstCat = new Cat();
// kirksFirstCat.name = "Tigger";
// kirksFirstCat.age = 15;
// kirksFirstCat.primaryColor = "Orange"

// let casFirstCat = new Cat();
// casFirstCat.name = "Midnight";
// casFirstCat.age = 21;
// casFirstCat.primaryColor = "Black";