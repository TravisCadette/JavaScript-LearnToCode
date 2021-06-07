"use strict"
function showData(x) {
    if (x != 1) {          // it toString and then it compares
        console.log(x);
    }
}

function showStrictlyData(x) {
     if (x !== 1) {
         console.log(x);
     }
}
showData(13);
showData("1");
showData("Hello");

console.log("--------------")

showStrictlyData(13);
showStrictlyData("1");
showStrictlyData("Hello");