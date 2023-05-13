const card = document.querySelectorAll(".recipes__cards");
const box = document.getElementById("mi-modal");
const remove_card = document.querySelectorAll(".button--remove");

remove_card.forEach((button, index) =>
  button.addEventListener("click", () => remove(index))
);

function remove(index) {
  box.classList.add("modal--active");
  box.addEventListener("click", event => {
    if (event.target.className === "modal__close") {
      box.classList.remove("modal--active");
    }
    if (event.target.classList[1] === "button__remove") {
      box.classList.remove("modal--active");
      $data.splice(index, 1);
      localStorage.setItem("card", JSON.stringify($data));
      card[index].remove();
    }
  });
}
