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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */


function vowelsAndConsonants(s) {
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i).match(/[aeiou]/)) {
      console.log(s.charAt(i));
    }
  }

  for (var _i = 0; _i < s.length; _i++) {
    if (s.charAt(_i).match(/[^aeiou]/)) {
      console.log(s.charAt(_i));
    }
  }
}

function main() {
  var s = readLine();
  vowelsAndConsonants(s);
}