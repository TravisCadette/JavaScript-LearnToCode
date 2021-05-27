"use strict"

let testLog = [95, 75, 90, 92, 91, 98, 85];

let totalTest = 0;

for (let i = 0; i < testLog.length; i++) {
    totalTest += testLog[i];
}

let averageTestScore = totalTest / testLog.length;

console.log("Average test scores " + averageTestScore.toFixed(2));


//Using a function 

function getAverage(testLog) {
    let totalTest = 0;

    for (let i = 0; i < testLog.length; i++) {
        totalTest += testLog[i];
    }
    let averageTestScore = totalTest/testLog.length

    return console.log(averageTestScore.toFixed(2))

}
getAverage(testLog)

function getAverageW(testLog) {
    let totalTest = 0;
    let i = 0

    while (i < testLog.length) {
        totalTest += testLog[i];
    }
    let averageTestScore = totalTest / testLog.length

    return console.log(averageTestScore.toFixed(2))
}
getAverageW(testLog)
