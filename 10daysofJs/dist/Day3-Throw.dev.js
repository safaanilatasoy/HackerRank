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
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */


function isPositive(a) {
  var isPositive;
  if (a > 0) return "YES";else if (a == 0) throw new Error("Zero Error");else if (a < 0) throw new Error("Negative Error");
}

function main() {
  var n = +readLine();

  for (var i = 0; i < n; i++) {
    var a = +readLine();

    try {
      console.log(isPositive(a));
    } catch (e) {
      console.log(e.message);
    }
  }
}