"use strict"

function displayMailingLabel(name, address, city, state, zip) {

    console.log(name);
    console.log(address);
    console.log(city + ", " + state + " " + zip);

}

function displayaddNumbers(num1, num2) {
    let someNumber = num1 + num2;
    console.log("num1 " + "+ " + "num2 " + "= " + someNumber);
}

function displayReceipt(totalDue, amountPaid) {
    let difference = amountPaid - totalDue;
    console.log("Total Due: $" + totalDue)
    console.log("Amount Paid: $" + amountPaid)
    
    if (difference < 0) {
        console.log("Amount Due: is $" + Math.abs(difference))
    }
    else {
        console.log("Change Due: $" + difference)
    }
}

displayMailingLabel ("Travis Cadette", "1217 Schenectady Ave" ,  "Brooklyn",  "NewYork" , 11203)

displayaddNumbers (5,5)

displayReceipt (60, 40)
displayReceipt (40, 60)