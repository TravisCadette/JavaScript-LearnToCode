"use strict";
//Tuition and Fees Caluclator

//undergraduate tuition is $4/hour and graduate tuition was $6/hour
// fees are $2/hr with a max of $10
//what do you owe the school

let classification = "undergraduate"
let hrsEnrolled = 15;

let tuitionPerHour;
if(classification = "undergraduate") {
    tuitionPerHour = 4; 
}
else {
    tuitionPerHour = 6;
}

let totalTuition = hrsEnrolled * tuitionPerHour;

let fees = 2 *hrsEnrolled;
if (fees >10) {
    fees = 10
}
