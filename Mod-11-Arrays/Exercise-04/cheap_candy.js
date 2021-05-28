"use strict"

let products = [{
        product: "Gummy Worms",
        price: 5.79
    },
    {
        product: "Plain M&Ms",
        price: 2.89
    },
    {
        product: "Peanut M&Ms",
        price: 2.89
    },
    {
        product: "Swedish Fish ",
        price: 4.5
    },
    {
        product: "Peach Rings",
        price: 2.89
    }, {
        product: "Hershey Kisses",
        price: 1.35
    }, {
        product: "Kit Kat",
        price: 5
    },
    {
        product: "Twix",
        price: 2.89
    }, {
        product: "Snickers",
        price: 1.89
    }, {
        product: "Trident Gum",
        price: 2.50
    },
   
    // TODO: fill the array with 10 candies of various
    // price ranges
]

let productsUnder = 4

let list = products.filter(arrayElement => arrayElement.price < productsUnder);

// because filter returns an array, you need a loop to examine each one of them

// console.log(list)

for (let i = 0; i < list.length; i++) {
    console.log(list[i].product, list[i].price);
}