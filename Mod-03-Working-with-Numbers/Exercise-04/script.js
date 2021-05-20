"use strict";
let studentName = "Dana";
let major = "csci";   // in reality, this comes from the UI
let degreeTrack = "N";
let degreeTrackName;
let majorName;
let advisingLocation;
// SWITCH U to Undergraduate, G to Graduate
if (degreeTrack == "U") {
    degreeTrackName = "Undergraduate";
}
else if (degreeTrack == "G") {
    degreeTrackName = "Graduate";
}
else {
    degreeTrackName = "<unknown>";
}
// Finds the major name AND the advision location
if (major == "BIOL") {
    majorName = "Biology";
    if (degreeTrack == "U") {
        advisingLocation = "Science Bldg, Room 310";
    }
    else if (degreeTrack == "G") {
        advisingLocation = "Science Bldg, Room 334";
    }
    else {
        advisingLocation = "Advising location not found."
    }
}
else if (major == "CSCI") {
    majorName = "Computer Science";
    if (degreeTrack == "U") {
        advisingLocation = "Sheppard Hall, Room 410";
    }
    else if (degreeTrack == "G") {
        advisingLocation = "Sheppard Hall, Room 314";
    }
    else {
        advisingLocation = "Advising location not found."
    }
}
else if (major == "ENG") {
    majorName = "English";
    if (degreeTrack == "U") {
        advisingLocation = "Kerr Hall, Room 201";
    }
    else if (degreeTrack == "G") {
        advisingLocation = "Kerr Hall, Room 202";
    }
    else {
        advisingLocation = "Advising location not found."
    }
}
else if (major == "HIST") {
    majorName = "History";
    if (degreeTrack == "U") {
        advisingLocation = "Alva Hall, Room 114";
    }
    else if (degreeTrack == "G") {
        advisingLocation = "Alva Hall, Room 115";
    }
    else {
        advisingLocation = "Advising location not found."
    }
}
else if (major == "MKT") {
    majorName = "Marketing";
    if (degreeTrack == "U") {
        advisingLocation = "Westly Hall, Room 310";
    }
    else if (degreeTrack == "G") {
        advisingLocation = "Westly Hall, Room 202";
    }
    else {
        advisingLocation = "Advising location not found."
    }
}
else {
    majorName = "<unknown>";
}
console.log("Student: " + studentName);
console.log("Degree Track: " + degreeTrackName + " (" + degreeTrack + ")");
console.log("Major: " + majorName + " (" + major + ")");
console.log("Advising Location: " + advisingLocation);