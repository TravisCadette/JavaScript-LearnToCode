"use strict"
let username = "  dana  ";
let pwd = "dog   food  ";

let usernameFromDB = "dana";
let passwordFromDB = "dog  food";
username = username.trum();
pwd = pwd.trim();

if (username == usernameFromDB && pwd == passwordFromDB) {
    console.log("USer logged in sucessfully");
}
else {
    console.log("Username and/or password is incorrect")
}