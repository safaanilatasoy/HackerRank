let button = document.querySelector("#btn");
let counter = 0;

button.addEventListener("click", increaseFunc);

function increaseFunc() {
  counter++;
  button.innerHTML = counter;
}
