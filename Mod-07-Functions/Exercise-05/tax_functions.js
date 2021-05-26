"use strict"


function getSocSecTax(grossPay) {
    //  let socSec = 0;
    //  socSec = grossPay * .062)
    //  return socSec;
    return grossPay * .062
}
   
function getMedicareTax(grossPay) {
    //   let mediCare = (grossPay * .0145)
      return grossPay * .0145;
}
  
function getFederalTax(grossPay, withHold) {
    let fedTax;
    if(withHold == 0) {
        fedTax = grossPay *.23
    } 
    else if (withHold == 1) {
        fedTax = grossPay * .21
    }
    else if (withHold == 2) {
        fedTax = grossPay * .195
    }
    else if (withHold == 3) {
        fedTax = grossPay * .185
    }
    else if (withHold == 4) {
        fedTax = grossPay * .18
    }
    else if (withHold > 4) {

        let extrawithHold = withHold-4
        let newTaxRate = .18 - extrawithHold * .005

        //if you have kids taxRate = 0, because the more kids ypu have the less money gets taken out

        if (newTaxRate < 0) {
            newTaxRate =0
        }
        fedTax = grossPay * newTaxRate
        fedTax = fedTax.toFixed(2)

    }
    return fedTax

}

let personOne = getFederalTax(750, 5)

console.log("Person One's FederalTax is " + personOne)