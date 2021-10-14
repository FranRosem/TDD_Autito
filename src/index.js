import moveCar from "./App";

const command = document.querySelector("#command-form");
const form = document.querySelector("#autitos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const commandInput = command.value;
  div.innerHTML = "<p>" + moveCar(commandInput) + "</p>";
});
