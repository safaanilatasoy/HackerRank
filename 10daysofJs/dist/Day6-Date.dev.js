'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
var inputString = '';
var currentLine = 0;
process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});
process.stdin.on('end', function (_) {
  inputString = inputString.trim().split('\n').map(function (string) {
    return string.trim();
  });
  main();
});

function readLine() {
  return inputString[currentLine++];
} // The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"


function getDayName(dateString) {
  var parts = dateString.split("/");
  var month = parseInt(parts[0], 10);
  var day = parseInt(parts[1], 10);
  var year = parseInt(parts[2], 10);
  var date = new Date(year, month - 1, day);
  var dayIndex = date.getDay();
  var dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var dayName = dayArr[dayIndex];
  return dayName;
}

function main() {
  var d = +readLine();

  for (var i = 0; i < d; i++) {
    var date = readLine();
    console.log(getDayName(date));
  }
}