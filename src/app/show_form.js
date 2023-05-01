const $form = document.querySelector(".recipes__menu");
const $flag = document.querySelector(".addRecipes__flag");
const $flagText = document.querySelector(".addRecipes__recipe");
const $open_btn = document.querySelector(".addRecipes__display");
openMenu();
function openMenu() {
  $open_btn.addEventListener("click", () => {
    $form.classList.toggle("recipes__menu--active");
    $flag.classList.toggle("addRecipes__flag--active");
    $flagText.classList.toggle("addRecipes__recipe--none");
    $open_btn.classList.toggle("addRecipes__display--active");
  });
}
