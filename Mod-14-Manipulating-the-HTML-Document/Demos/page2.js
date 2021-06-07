"use strict";
let winningTickets = [{
        tixNum: "1298711",
        expires: "2021-06-15",
        prize: 250000
    },
    {
        tixNum: "1309182",
        expires: "2021-06-30",
        prize: 500000
    },
    {
        tixNum: "130332",
        expires: "2021-07-30",
        prize: 5200
    },
    {
        tixNum: "130232182",
        expires: "2021-08-30",
        prize: 500000
    },
    {
        tixNum: "65467656",
        expires: "2021-09-30",
        prize: 130000
    },
];

window.onload = function() {
    loadLotteryTable();
}

function loadLotteryTable() {
    //step 1 find HTML Table
    const table = document.getElementById("winningTicketsTbl");

    // step 2: loop thru the data array that im going to put in table
    for(let i = 0; i < winningTickets.length; i++) {
        let row = table.insertRow(-1);

        let expiresCell = row.insertCell(0);
        expiresCell.innerHTML = winningTickets[i].expires;

        let prizeAmtCell = row.insertCell(1);
        prizeAmtCell.innerHTML = "$" + winningTickets[i].prize.toFixed(2);

        let ticketNumberCell = row.insertCell(2);
        ticketNumberCell.innerHTML = winningTickets[i].tixNum;
    }
}