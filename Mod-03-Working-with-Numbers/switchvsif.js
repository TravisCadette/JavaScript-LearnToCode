// / USING SWITCH
switch(degreeTrack) {
  case "U":
    degreeTrackName = "Undergraduate";
    break;
  case "G":
    degreeTrackName = "Graduate";
    break;
  default:
    degreeTrackName = "<unknown>";
}
// OR USING IF/ELSE
if (degreeTrack == "U") {
    degreeTrackName = "Undergraduate";
}
else if (degreeTrack == "G") {
    degreeTrackName = "Graduate";
}
else {
    degreeTrackName = "<unknown>";
}
//---------------------------------------
// NO WAY TO USE SWITCH
if (annualIncome <= 120000) {    // cant's use because operator is <=
}
else if (annualIncome <= 25000) {
} (edited) 



