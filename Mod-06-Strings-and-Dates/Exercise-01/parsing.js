"use strict"

let fullName = "Brenda Kaye";


let firstName;
let lastName;

let colonPosition = fullName.indexOf(" ");

firstName = fullName.substring(0, colonPosition); // colonposition character is not
// included when you call subtring

lastName = fullName.substring(colonPosition + 1); // if you only secify the starting position,
// it automatially goes to the end of the string

console.log("Name: " + fullName);
console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);