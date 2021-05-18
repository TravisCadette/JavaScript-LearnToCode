"use strict";
// inputs
let length = 22;
let width = 14;
// calculate the area of the room
let area = length * width;
// calculate the number of tiles needed (incl 10% extra for breakage)
let tilesNeeded = area + (area * .1);
// calculate the number of boxes needed; tiles are packaged 12 per box;  can't buy a partial box
let boxesNeeded = Math.ceil(tilesNeeded / 12);  
// display the output
console.log("You will need " + boxesNeeded + " boxes.");