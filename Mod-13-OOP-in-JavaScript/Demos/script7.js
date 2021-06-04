"use strict"

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    announceSelf() {
        console.log("Hi, I am " + this.name + " and I am " + this.age + " years old.");
    }
}

let dana = new Person("Dana", 62);
let ezra = new Person("Ezra", 16);

let x = 12;
let y = 14;
let z = x + y'

// ------------------------------------------------
let p1 = new Person("Elisha", 13);
p1.announceSelf();
p1.haveABirthday();
console.log("Elisha just had a birthday...");
p1.announceSelf();
let p2 = new Person();
p2.name = "Pursalane";
p2.age = 10;
p2.announceSelf();
p2.haveABirthday();
console.log("Pursalane just had a birthday...");

p2.announceSelf();

dana.announceSelf();

ezra.announceSelf();