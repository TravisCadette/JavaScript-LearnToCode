"use strict"

let num = 0;
function doit(n) {
    let num = 10;
    for (let i =1; i < n; i++) {
        num += i;
    }
    return num;
}

num = doit(3)
console.log(num)