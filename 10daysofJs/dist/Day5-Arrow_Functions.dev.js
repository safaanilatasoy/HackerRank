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
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */


var modifyArray = function modifyArray(nums) {
  var n = nums.length;
  var newArr = [];

  for (var i = 0; i < n; i++) {
    if (nums[i] % 2 === 1) {
      newArr.push(nums[i] * 3);
    } else if (nums[i] % 2 === 0) {
      newArr.push(nums[i] * 2);
    }
  }

  return newArr;
};

function main() {
  var n = +readLine();
  var a = readLine().split(" ").map(Number);
  console.log(modifyArray(a).toString().split(",").join(" "));
}