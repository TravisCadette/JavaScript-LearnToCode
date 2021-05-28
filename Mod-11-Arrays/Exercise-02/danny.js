"use strict";
// Cost of lunch items
let lunch = [{
        item: "Steak fajitas",
        price: 9.95
    },
    {
        item: "Chips and Guacomole",
        price: 5.25
    },
    {
        item: "Sweet tea",
        price: 2.79
    },
]
let yourLunch = [{
        item: "Beans",
        price: 4.95
    },
    {
        item: "Tacos",
        price: 2.00
    },
    {
        item: "Burritos",
        price: 6.50
    },
]
//Function to display food choices
function displayFoodChoices(foodChoices) {
    for (let i = 0; i < foodChoices.length; i++) {
        console.log(foodChoices[i].item);
    }
}
//function to display total cost
function calculateSubTotal(foodChoices) {
    let subTotal = 0;
    let length = foodChoices.length
    for (let i = 0; i < length; i++) {
        subTotal += Number(foodChoices[i].price)
    }
    return subTotal;
}
//define & calculate tax
let taxAmt = calculateSubTotal(yourLunch) * .08;
//define & calculate tip
let tipAmt = calculateSubTotal(yourLunch) * .18;
//define & calculate total
let total = calculateSubTotal(yourLunch) + taxAmt + tipAmt;
//-----------
//Call to Display Food Choices Function
console.log("Your Order: ")
displayFoodChoices(yourLunch);
console.log()
//Call to Display Sub Total
let myTotal = calculateSubTotal(yourLunch);
console.log("Sub Total: " + myTotal);
//Call to Display Tax:
console.log("Tax: " + taxAmt.toFixed(2));
//Call to Display Tip
console.log("Tip: " + tipAmt.toFixed(2));
//Call to Display Total
console.log("Total: " + total.toFixed(2))