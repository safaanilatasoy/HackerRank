'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
var inputString = '';
var currentLine = 0;
process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});
process.stdin.on('end', function () {
  inputString = inputString.split('\n');
  main();
});

function readLine() {
  return inputString[currentLine++];
}
/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */


function miniMaxSum(arr) {
  // Write your code here
  var maxNumber = arr[0];
  var minNumber = arr[0];
  var arrMax = 0;
  var arrMin = 0;
  var arrSum = 0;

  for (var i = 0; i < arr.length; i++) {
    arrSum += arr[i];

    if (arr[i] < arr[i + 1]) {
      maxNumber = arr[i + 1];
    }

    if (arr[i] > arr[i + 1]) {
      minNumber = arr[i + 1];
    }
  }

  arrMax = arrSum - maxNumber;
  arrMin = arrSum - minNumber;
  console.log(arrMax, arrMin);
}

function main() {
  var arr = readLine().replace(/\s+$/g, '').split(' ').map(function (arrTemp) {
    return parseInt(arrTemp, 10);
  });
  miniMaxSum(arr);
}