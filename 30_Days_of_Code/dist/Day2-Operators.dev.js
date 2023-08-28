"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var inputString = "";
var currentLine = 0;
process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});
process.stdin.on("end", function () {
  inputString = inputString.split("\n");
  main();
});

function readLine() {
  return inputString[currentLine++];
}
/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */


function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  var tip = meal_cost / 100 * tip_percent;
  var tax = tax_percent / 100 * meal_cost;
  var total_cost = meal_cost + tip + tax;
  total_cost = Math.round(total_cost);
  console.log(total_cost);
}

function main() {
  var meal_cost = parseFloat(readLine().trim());
  var tip_percent = parseInt(readLine().trim(), 10);
  var tax_percent = parseInt(readLine().trim(), 10);
  solve(meal_cost, tip_percent, tax_percent);
}