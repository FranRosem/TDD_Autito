import {moveCar} from "./App";

const command = document.querySelector("#comandos-form");
const form = document.querySelector("#autitos-form");
const direction = document.querySelector("#direction-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  var str = command.value;
  var my_list = moveCar(str);

  direction.innerHTML = "<p>" + String(my_list[0]) + "," + String(my_list[1]) + String(my_list[2]) + "</p>";
});
