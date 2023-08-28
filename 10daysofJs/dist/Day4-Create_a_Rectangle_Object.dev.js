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
 * Complete the Rectangle function
 */


function Rectangle(a, b) {
  var rect = {};
  this.length = a;
  this.width = b;
  this.perimeter = 2 * (a + b);
  this.area = a * b;
}

function main() {
  var a = +readLine();
  var b = +readLine();
  var rec = new Rectangle(a, b);
  console.log(rec.length);
  console.log(rec.width);
  console.log(rec.perimeter);
  console.log(rec.area);
}