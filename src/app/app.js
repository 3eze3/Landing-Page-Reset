// ----------- Funcion Animacion Show Categorias -----------
const $categories = document.querySelector(".categories");
function lefttoRight($element) {
  window.addEventListener("scroll", () => {
    $element.classList.toggle("categories__show", window.scrollY > 200);
  });
}
lefttoRight($categories);
// --- Funcionalidad Ocultar/Mostrar Menu ---/
const $menuRecipes = document.querySelector(".recipes__menu ");
const $buttonMenuRecipes = document.querySelector(".addRecipes__display");
const $textButtonMenu = document.querySelector(".addRecipes__recipe");
const $flagMenu = document.querySelector(".addRecipes__flag");
const $rowReverse = document.querySelector(".addRecipes__display");
const invertMenu = elementMenu => {
  $buttonMenuRecipes.addEventListener("click", () => {
    $textButtonMenu.classList.toggle("addRecipes__recipe--none");
    $flagMenu.classList.toggle("addRecipes__flag--active");
    $rowReverse.classList.toggle("addRecipes__display--active");
    setTimeout(() => {
      elementMenu.classList.toggle("recipes__menu--close");
    }, 250);
  });
};
invertMenu($menuRecipes);
// --- Funcionalidad Agregar/Eliminar nuevos ingredientes ---/
// -Funcionalidad agregar umar ingredientes
// -Funcionalidad elimniar Restar/Actualizar ingredientes
// Funcionalidad de Guardar/Actualizar Numero Categorias
