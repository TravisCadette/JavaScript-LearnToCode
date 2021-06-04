"use strict"

// id
// name
// jobTitle
// payRate

class Employee {
    constructor(id, name, jobTitle, payRate) {
        this.id = id;
        this.name = name;
        this.jobTitle = jobTitle;
        this.payRate = 10;
    }
    promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }

    getGrossPay(hrsWorked) {
        return hrsWorked * this.payRate;
    }

    toString() {
        return this.name + " " + this.id + " is a " + this.jobTitle + " earning " + this.payRate + "/hr" + " the employees gross pay is " + grossPay
    }
}

let employee1 = new Employee("01", "Kirkland", "Bottle Packager", 10);
let employee2 = new Employee("02", "Goli", "Vitamin Bottler", 15)
employee1.promote("Manager", 20);

let grossPay = employee1.getGrossPay(40);

console.log(employee1.toString());

grossPay = employee2.getGrossPay(35);

console.log(employee2.toString());