" use strict"

// Parts Codes look like manufacturer: partNumber
// ex Nike:L10

let partCode = "ADDIDAS:M76T41S";
// let parCode = document.getElementByID("partCode").value;

let manufacturer;
let partNumber;

let colonPosition = partCode.indexOf(":");

manufacturer = partCode.substring(0, colonPosition); // colonposition character is not
                                                     // included when you call subtring

partNumber = partCode.substring(colonPosition + 1);   // if you only secify the starting position,
                                                    // it automatially goes to the end of the string

console.log("Manufacturer: " + manufacturer);
console.log("Part Number:" + partNumber);

