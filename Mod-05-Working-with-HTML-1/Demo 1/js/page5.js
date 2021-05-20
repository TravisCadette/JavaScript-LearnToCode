"use strict"

window.onload = function() {
    let findAgeBtn = document.getElementById("findAgeBtn");
    findAgeBtn.onclick = findAgeBtnClicked;
}

function findAgeBtnClicked() {
    // Get the year the user wa born from the HTML input whose id is yearBorn
    const yearBornField =document.getElementById("yearBorn");
    let yearBorn = Number (yearBornField.value)

    // Get todays date so we can calculate the users age on their birthday this year
    let today = new Date();
    let currentYear = today.getFullYear();

    //Calculate the users age using their year born and todays year
    let age = currentYear - yearBorn;

    //Find the input field that will hold the results and place the age their
    const ageField = document.getElementById("age");
    ageField.value = age;
}
