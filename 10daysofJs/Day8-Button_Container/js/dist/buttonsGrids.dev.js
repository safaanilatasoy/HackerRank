"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

window.onload = function () {
  var button5 = document.getElementById("btn5");
  button5.addEventListener("click", function () {
    // get all the values from the buttons
    var arr = [document.getElementById("btn1").innerText, document.getElementById("btn2").innerText, document.getElementById("btn3").innerText, document.getElementById("btn6").innerText, document.getElementById("btn9").innerText, document.getElementById("btn8").innerText, document.getElementById("btn7").innerText, document.getElementById("btn4").innerText]; // create new shifted array

    arr = [].concat(_toConsumableArray(arr.slice(arr.length - 1)), _toConsumableArray(arr.slice(0, arr.length - 1))); // assign new values to buttons

    document.getElementById("btn1").innerText = arr[0];
    document.getElementById("btn2").innerText = arr[1];
    document.getElementById("btn3").innerText = arr[2];
    document.getElementById("btn6").innerText = arr[3];
    document.getElementById("btn9").innerText = arr[4];
    document.getElementById("btn8").innerText = arr[5];
    document.getElementById("btn7").innerText = arr[6];
    document.getElementById("btn4").innerText = arr[7];
  });
};