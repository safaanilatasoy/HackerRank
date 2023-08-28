"use strict";

function main() {
  var n = parseInt(readLine().trim(), 10);
  var temp;
  var arr = readLine().replace(/\s+$/g, "").split(" ").map(function (arrTemp) {
    return parseInt(arrTemp, 10);
  });
  temp = arr.reverse();
  temp = temp.join(" ");
  console.log(temp);
}