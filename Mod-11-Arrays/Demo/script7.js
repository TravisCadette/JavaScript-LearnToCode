"use strict";
let menu = [{
        id: 1,
        item: "Tacos",
        category: "Meal",
        price: 12.29
    },
    {
        id: 2,
        item: "Burger",
        category: "Meal",
        price: 7.29
    },
    {
        id: 3,
        item: "Chicken Salad",
        category: "Meal",
        price: 8.29
    },
    {
        id: 4,
        item: "Ice tea",
        category: "Drink",
        price: 2.19
    },
    {
        id: 5,
        item: "Coke",
        category: "Drink",
        price: 2.29
    },
    {
        id: 6,
        item: "Dr. Pepper",
        category: "Drink",
        price: 2.29
    },
    {
        id: 7,
        item: "Sprite",
        category: "Drink",
        price: 2.29
    }
];
let itemToSearchFor = "Coke";
// search for the item.  if we carry it, displ;ay the price.
// if we don't carry it, tell the user that we don't carry it
for (let i = 0; i < menu.length; i++) {
    if (menu[i].item == itemToSearchFor) {
        console.log("The price of " + itemToSearchFor + " is $" + menu[i].price);
        break;
    }
}