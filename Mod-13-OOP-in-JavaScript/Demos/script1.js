"use script"

// build Cat
//name, age, primaryColor

class Cat {
    constructor() {
        this.name = "";
        this.age = 0;
        this.primaryColor = "";
    }
}

let travsFirstCat = new Cat();
travsFirstCat.name = "Oreo";
travsFirstCat.age = 21;
travsFirstCat.primaryColor = "Grey"

let kirksFirstCat = new Cat();
kirksFirstCat.name = "Tigger";
kirksFirstCat.age = 15;
kirksFirstCat.primaryColor = "Orange"

let casFirstCat = new Cat();
casFirstCat.name = "Midnight";
casFirstCat.age = 21;
casFirstCat.primaryColor = "Black";

let cats = [travsFirstCat, kirksFirstCat, casFirstCat];

for(let i = 0; i < cats.length; i++) {
    console.log(cats[i].name);
}