"use strict"

class BetterDate extends Date {

    constructor() {
        super();
    }

    //returns the date as dd-month-yyyy
    getFormattedDate() {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        return this.getDate() + "-" + months[this.getMonth()] + "-" + this.getFullYear();
    }
}

let today = new BetterDate();
let copyright = "(c)" + today.getFullYear() + " by Dana";
console.log(copyright);




// class Asset {

//     constructor(descr, value) {
//         this.description = descr;
//         this.value = value;
//     }
// }

// class House extends Asset {
//     constructor(address, numBed, numBath, sqFoot, descr, value) {
//         super(descr, value);
//         this.address = address;
//         this.numBed = numBed;
//         this.numBath = numBath;
//         this.sqFoot = sqFoot;
//     }
// }