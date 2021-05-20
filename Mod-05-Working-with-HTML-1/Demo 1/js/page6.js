"use strict"

window.onload = function() {
    // 
    const calcPayBtn = document.getElementById("calcPayBtn");
    calcPayBtn.onclick = calcPayBtnClicked;

    const calcSalaryBtn = document.getElementById("calcSalaryBtn");
    calcSalaryBtn.onclick = calcSalaryBtnClicked;
}

function calcPayBtnClicked() {
    // Get PayRate of Employee From input field
    const payRateField = document.getElementById("payRate");
    let payRate = Number(payRateField.value);
    // GEt Hours Worked
    const hrsWorkedField = document.getElementById("hrsWorked");
    let hrsWorked = Number(hrsWorkedField.value);

    let grossPay;
    if (hrsWorked > 40) {
        grossPay = (payRate * 40) + (hrsWorked-40) * 1.5 * payRate; 
    }
    else {
        grossPay = payRate * hrsWorked
    }
    let message = "Your gross pay is $ " + grossPay.toFixed(2);

    const resultsField = document.getElementById("results");
    resultsField.innerHTML = message;
}

function calcSalaryBtnClicked() {
    const payRateField = document.getElementById("payRate");
    let payRate = Number(payRateField.value);

    let grossPay = payRate * 40;
    // Generate output for GrossPay
    let message = "Your gross pay is $ " + grossPay.toFixed(2);

    const resultsField = document.getElementById("results");
    resultsField.innerHTML = message;

}

