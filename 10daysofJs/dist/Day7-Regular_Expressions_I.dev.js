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
}

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  var re = /desen/;
  /*
   * Do not remove the return statement
   */

  var reDeseni = /^([aeiou]).*\1$/i;
  var reObj = new RegExp(reDeseni);
  return reObj;
  return re;
}

function main() {
  var re = regexVar();
  var s = readLine();
  console.log(re.test(s));
}