"use strict"

window.onload = function () {

    const showBtn = document.getElementById("showBtn");
    showBtn.onclick = showBtnClicked;
}

// const messageDiv = document.getElementById("messageDiv");
// const nameField = document.getElementById("name");
// const ageField = document.getElementById("age");
// const clickMeBtn = document.getElementById("clickMeBtn");

function showBtnClicked() {
    const nameField = document.getElementById("name");
    const ageField = document.getElementById("age");

    let name = nameField.value;
    let age = ageField.value; // age is a string here
    
    let message = "Hi " + name + "! I hear you are " + age + " years old!";
    
    const messagePara = document.getElementById("message");
    messagePara.innerHTML = message
}