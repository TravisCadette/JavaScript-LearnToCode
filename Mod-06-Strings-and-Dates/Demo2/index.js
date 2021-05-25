"use strict"

window.onload = function() {
    const btn = document.getElementById("theButton");
    btn.onclick = theButtonClicked;
}
function theButtonClicked() {
    const dateSelectionField = document.getElementById("dateSelection");
    let dateStr = dateSelectionField.value;

    //dateStr current format is yyyy-mm-dd and we need to convert it 
    //to either yyyy/mm/dd or mm/dd/yyyy so that Javascript is never
    // OFF BY ONE DAy depending on the time we run the code and the timexone
    //we live in

    let mo = dateStr.substr(0,2); //return mm
    let da = dateStr. substr(8,2); // returns dd
    let yr = dateStr.substr(0,4); // return yyyy

    let reformattedDatestr = mo + "/" + da +"/" + yr;
    let dateSelected = new Date(reformattedDatestr);
    let dayOfWeek = dateSelected.getDay(); //0-Sunday, 1= Monday ...

    const resultsPara = document.getElementById("results");
    resultsPara.innerHTML = dateStr;
}