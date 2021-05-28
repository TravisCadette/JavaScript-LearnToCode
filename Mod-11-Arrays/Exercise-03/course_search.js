"use strict"


let data = [{
    CourseId: "19SUM100",
    Title: "Introduction to HTML/CSS/Git",
    Instructor: "Wyatt",
    Location: "Classroom 7",
    StartDate: "07/08/19",
    Fee: 100.00,
}, {
    CourseId: "19SUM200",
    Title: "Introduction to JavaScript",
    Instructor: "Lynn",
    Location: "Classroom 8",
    StartDate: "07/22/19",
    Fee: 350.00,
}, {
    CourseId: "19SUM300",
    Title: "Introduction to Node.JS and Express",
    Instructor: "Gross",
    Location: "Classroom 4",
    StartDate: "09/09/19",
    Fee: 50.00,
}, {
    CourseId: "19SUM400",
    Title: "Introduction to SQL and Databases",
    Instructor: "Wyatt",
    Location: "Classroom 6",
    StartDate: "09/16/19",
    Fee: 50.00,
}, {
    CourseId: "19SUM500",
    Title: "Introduction to Angular",
    Instructor: "Lynn",
    Location: "Classroom 7",
    StartDate: "09/23/19",
    Fee: 50.00,
}];

let itemToSearchFor = "19SUM300";
let course = data.find(c => c.CourseId == itemToSearchFor);
if (course != null) {
    console.log(course);
} else {
    console.log(itemToSearchFor + " was not found");
}

// look for 19SUM300

let courseIdToSearchFor = "19SUM300"

// On way to find this to write your own loop and do all the comparisons

