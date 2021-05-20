"use strict"

/* Under 12000 tax rate 0%
   12000-24999.99 tax rate 6 Percent 
   25000-74999.99 11%
   75000 < 20%
   */
let payRate = 10
let hoursWorked = 50
let overtimeHours;
    if(hoursWorked >40);
    overtimeHours = 40 - hoursWorked

let weeklyPay;
    if (hoursWorked <=40) {
        weeklyPay = hoursWorked * payRate
    }
    else {
        weeklyPay = ((hoursWorked- overtimeHours) * payRate) + (1.5 * payRate * overtimeHours))
    }

let income = weeklyPay * 52;

let netIncome;


if (income <=12000) {
    netIncome = income;
}
    
else if (income <= 24999.99) {
    netIncome = .95 * income;
}
    

else if (income <= 74999.99) {
    netIncome = .89 * income
}
    
else {
    netIncome = .80 * income
}

let payCheck = netIncome /52;

console.log("Your paycheck will be " + payCheck) 