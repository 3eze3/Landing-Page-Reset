const $buttons = document.querySelectorAll(".addRecipes__register  button");
$buttons.forEach(button =>
  button.addEventListener("click", event => event.preventDefault())
);
