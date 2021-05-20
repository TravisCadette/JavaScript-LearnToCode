"use strict"

window.onload = function() {
    let calcPayBtn = document.getElementById("calcPayBtn");
    calcPayBtn.onclick = calcPayBtnClicked;
}

function calcPayBtnClicked() {
    
    const payRateField = document.getElementById("payRate");
    let payRate = Number(payRateField.value);

    const hrsWorkedField = document.getElementById("hrsWorked");
    let hrsWorked = Number(hrsWorkedField.value);

    let grossPay;
    if (hrsWorked > 40) {
        grossPay = (payRate * 40) + (hrsWorked-40) * 1.5 * payRate) 
    }
    else {
        grossPay = payRate * hrsWorked
    }
    let message = "Your gross pay is $ " + grossPay.toFixed(2);

    const resultsField = document.getElementById("results");
    resultsField.innerHTML = message;
}
