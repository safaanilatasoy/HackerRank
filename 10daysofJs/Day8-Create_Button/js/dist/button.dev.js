"use strict";

var button = document.querySelector("#btn");
var counter = 0;
button.addEventListener("click", increaseFunc);

function increaseFunc() {
  counter++;
  button.innerHTML = counter;
}