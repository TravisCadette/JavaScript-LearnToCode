"use strict"

window.onload = function () {
    
    const addBtn = document.getElementById("addBtn");
    addBtn.onclick = addBtnClicked;

    const subBtn = document.getElementById("subBtn");
    subBtn.onclick = subBtnClicked;

    const multiplyBtn = document.getElementById("multiplyBtn");
    multiplyBtn.onclick = multiplyBtnClicked;

    const divideBtn = document.getElementById("divideBtn");
    divideBtn.onclick = divideBtnClicked;
}

function addBtnClicked() {

    const numberOneField = document.getElementById("number1");
    let numberOne = Number(numberOneField.value);

    const numberTwoField = document.getElementById("number2");
    let numberTwo = Number(numberTwoField.value);

    let results = numberOne + numberTwo
    const resultsField = document.getElementById("results");
    resultsField.value = results;
}

function subBtnClicked() {

    const numberOneField = document.getElementById("number1");
    let numberOne = Number(numberOneField.value);

    const numberTwoField = document.getElementById("number2");
    let numberTwo = Number(numberTwoField.value);

    let results = numberOne - numberTwo
    const resultsField = document.getElementById("results");
    resultsField.value = results;
}

function multiplyBtnClicked() {

    const numberOneField = document.getElementById("number1");
    let numberOne = Number(numberOneField.value);

    const numberTwoField = document.getElementById("number2");
    let numberTwo = Number(numberTwoField.value);

    let results = numberOne * numberTwo
    const resultsField = document.getElementById("results");
    resultsField.value = results;
}

function divideBtnClicked() {

    const numberOneField = document.getElementById("number1");
    let numberOne = Number(numberOneField.value);

    const numberTwoField = document.getElementById("number2");
    let numberTwo = Number(numberTwoField.value);

    let results = numberOne + numberTwo
    const resultsField = document.getElementById("results");
    resultsField.value = results;
}