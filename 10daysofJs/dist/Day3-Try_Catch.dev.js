"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var inputString = "";
var currentLine = 0;
process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});
process.stdin.on("end", function (_) {
  inputString = inputString.trim().split("\n").map(function (string) {
    return string.trim();
  });
  main();
});

function readLine() {
  return inputString[currentLine++];
}
/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */


function reverseString(s) {
  try {
    var numbers = s.split("");
    numbers.reverse();
    var reverseArray = numbers.join("");
    console.log(reverseArray);
  } catch (error) {
    console.log(error.message);
    console.log(s);
  }
}

function main() {
  var s = eval(readLine());
  reverseString(s);
}