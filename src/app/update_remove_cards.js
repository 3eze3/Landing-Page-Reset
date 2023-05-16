const card = document.querySelectorAll(".recipes__cards");
const box = document.getElementById("mi-modal");
const remove_card = document.querySelectorAll(".button--remove");
const edit = document.querySelectorAll(".button--settings");
const confirmEdit = document.querySelectorAll(".register__btn--update");
remove_card.forEach((button, index) =>
  button.addEventListener("click", () => remove(index))
);

edit.forEach((edit, index) => {
  edit.addEventListener("click", () => editcard(index));
});

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

function editcard(index) {
  const title = card[index].querySelector(".recipes__title");
  const description = card[index].querySelector(".recipes__description");
  const item = card[index].querySelectorAll(".recipes__item");
  title.setAttribute("contenteditable", true);
  description.setAttribute("contenteditable", true);
  item.forEach(ite => ite.setAttribute("contenteditable", true));
  confirmEdit[index].classList.add("register__btn--active");
  confirmEdit.forEach(con =>
    con.addEventListener("click", () => {
      const title = card[index].querySelector(".recipes__title");
      const description = card[index].querySelector(".recipes__description");
      const item = card[index].querySelectorAll(".recipes__item");
      title.setAttribute("contenteditable", false);
      description.setAttribute("contenteditable", false);
      item.forEach(ite => ite.setAttribute("contenteditable", false));
      con.classList.remove("register__btn--active");
    })
  );
}
