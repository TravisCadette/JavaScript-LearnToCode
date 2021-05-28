"use script"

function displaysubTotal(food) {
    let subTotal = 0;
    let length = food.length;
    //  [i] . (specific info in array)
    for (let i = 0; i < length; i++ ) {
        subTotal += food[i].price;
    }
    return subTotal;
}

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
    }
];

console.log(displaysubTotal(lunch))
