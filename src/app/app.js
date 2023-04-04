// ----------- Varibles -----------
const $categories = document.querySelector(".categories");
const $numRecipes = document.querySelector(".categories__count");
const $allCategories = document.querySelectorAll(".categories__item");
const $menuAddRecipes = document.querySelector(".recipes__menu");
const $buttonAddRecipes = document.querySelector(".addRecipes__display");
const $menuAddName = document.querySelector(".addRecipes__recipe");
const $containerAdd = document.querySelector(".addRecipes__flag");
// --- Funcionalidad Categoria ---/
leftToRight($categories);
function leftToRight(element) {
  window.addEventListener("scroll", () => {
    element.classList.toggle("categories__show", window.scrollY > 185);
  });
}
// --- Funcionalidad ocultar/mostrar menu ---/
const invert = () => {
  $buttonAddRecipes.addEventListener("click", () => {
    $menuAddRecipes.classList.toggle("addRecipes__close");
    $menuAddName.classList.toggle("addRecipes__recipe--none");
    $containerAdd.classList.toggle("addRecipes__flag--active");
  });
};
invert();
// --- Funcionalidad agregar ingredientes ---/
