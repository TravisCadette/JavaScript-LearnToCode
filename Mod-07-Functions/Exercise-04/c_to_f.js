"use strict"

function convertCtoF(temp) {
    let FTemp = (temp * 9 / 5) + 32;
    return FTemp;
}
let temp = 92;
let farenTemp = convertCtoF(temp);

console.log(temp + "C is " + farenTemp + "F")
