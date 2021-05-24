"use strict"

// phoone number data formats: 817-291-8146 817.291.8146
//                             817/291-8146 (817)291-8146

let phoneNumber = "8172918146"

//write code to pull out 1st 3 digits, next 3 digits, and last 4 digits
//and then format like (xxx) xxx-xxxx

let first3Digits = phoneNumber.substring(0,3);
let mid3Digits = phoneNumber.substring(3,6);
let las4Digits = phoneNumber.substring(6);

let formatedPhoneNumber = "(" +first3Digits + ") " + mid3Digits + "-" + las4Digits;

console.log("Formatted Phone Number: " + formatedPhoneNumber);

let formatedPhoneNumberAnotherWay = `(${first3Digits}) ${mid3Digits}-${las4Digits}`;

console.log("Formatted phone number: " + formatedPhoneNumberAnotherWay) 