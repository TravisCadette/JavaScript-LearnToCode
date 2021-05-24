"use strict"

let product = ("DI:12345-M")

let supCode;
let prdNum;
let prdsize;

let colonPosition = product.indexOf(":")
let dashPosition = product.indexOf("-")

supCode = product.substring(0,colonPosition);
prdNum = product.substring(colonPosition +1,dashPosition)
prdsize = product.substring(dashPosition +1)

console.log("Supplier Code: " + supCode);
console.log("Product Number: " + prdNum);
console.log("Size: " + prdsize);