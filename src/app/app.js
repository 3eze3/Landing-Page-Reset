// ----------- Varibles -----------
const $categories = document.querySelector(".categories");
const $numRecipes = document.querySelector(".categories__count");
const $allCategories = document.querySelectorAll(".categories__item");
const $menuAddRecipes = document.querySelector(".recipes__menu");
// --- Funcionalidad Categoria ---/
leftToRight($categories);
function leftToRight(element) {
  window.addEventListener("scroll", () => {
    element.classList.toggle("categories__show", window.scrollY > 185);
  });
}
// --- Funcionalidad ocultar/mostrar menu ---/
const $buttonAddRecipes = document.querySelector(".addRecipes__display");
const $menuAddName = document.querySelector(".addRecipes__recipe");
const $containerAdd = document.querySelector(".addRecipes__flag");
const invert = () => {
  $buttonAddRecipes.addEventListener("click", () => {
    $menuAddRecipes.classList.toggle("addRecipes__close");
    $menuAddName.classList.toggle("addRecipes__recipe--none");
    $containerAdd.classList.toggle("addRecipes__flag--active");
    $buttonAddRecipes.classList.toggle("addRecipes__display--active");
  });
};
invert();
// --- Funcionalidad agregar/eliminar nuevos ingredientes ---/
const $buttonAddItem = document.querySelectorAll(".register__btn--add");
let itemCount = {};
const addItem = parentElement => {
  const listName = parentElement.querySelector(
    ".register__nameList"
  ).textContent;
  !itemCount[listName] ? (itemCount[listName] = 1) : itemCount[listName]++;
  const newItem = `<li class="register__item ">
<label class="register__label">
${itemCount[listName]}.
<input
class="register__input register__input--recipe"
type="text"
placeholder="${listName} ${itemCount[listName]}" />
<button class="register__btn register__btn--remove">X</button>
</label>
</li>`;
  const $list = parentElement.querySelector(".register__list");
  // console.log($list);
  $list.insertAdjacentHTML("beforeend", newItem);
};
const removeItem = event => {
  event.preventDefault();
  const removeBtn = event.target.closest(".register__btn--remove");
  const item = removeBtn.closest(".register__item");
  const listName = item.parentElement.parentElement.querySelector(
    ".register__nameList"
  ).textContent;
  item.remove();
  itemCount[listName]--;
};
$buttonAddItem.forEach(buttonAdd => {
  buttonAdd.addEventListener("click", event => {
    event.preventDefault();
    addItem(buttonAdd.parentElement.parentElement);
  });
});
document.addEventListener("click", event => {
  if (event.target.classList.contains("register__btn--remove")) {
    removeItem(event);
  }
});
// Funcionalidad de Guardar/Actualizar-Categorias
const recipeCountSpan = document.getElementById("recipe-count");
function guardarReceta() {
  let currentRecipeCount = parseInt(recipeCountSpan.innerText);
  let newRecipeCount = currentRecipeCount + 1;
  recipeCountSpan.innerText = newRecipeCount.toString();
}
const guardarBtn = document.querySelector(".register__save");
guardarBtn.addEventListener("click", event => {
  event.preventDefault();
  guardarReceta();
});
// // Funcionalidad de Guardar/Informacion-Localstorage
// const form = document.querySelector(".addRecipes__register");
// const recipeList = document.querySelector(".recipes");

// // Cargar recetas guardadas en el Local Storage
// window.addEventListener("load", () => {
//   const savedRecipes = JSON.parse(localStorage.getItem("recipes"));
//   if (savedRecipes) {
//     recipeList.innerHTML = savedRecipes;
//   }
// });

// // Función para guardar la receta en el Local Storage y mostrarla en la lista
// function saveRecipe() {
//   const title = document.querySelector(
//     '.register__input[name="recipe_name"]'
//   ).value;
//   const description = document.querySelector(
//     '.register__input[name="recipe_description"]'
//   ).value;

//   const ingredientsList = document.querySelectorAll(
//     ".register__list--ingredients "
//   );
//   const ingredients = Array.from(ingredientsList).map(
//     ingredient => ingredient.textContent
//   );

//   const stepsList = document.querySelectorAll(".register__list--steps");
//   const steps = Array.from(stepsList).map(step => step.textContent);

//   const recipeHtml = `
//     <article class="recipes__item">
//       <h3 class="recipes__title">${title}</h3>
//       <p class="recipes__description">${description}</p>
//       <ul class="recipes__list">
//         <h4 class="recipes__subtitle">Ingredients:</h4>
//         ${ingredients
//           .map(ingredient => `<li class="recipes__itemList">${ingredient}</li>`)
//           .join("")}
//       </ul>
//       <ul class="recipes__list">
//         <h4 class="recipes__subtitle">Steps:</h4>
//         ${steps
//           .map(step => `<li class="recipes__itemList">${step}</li>`)
//           .join("")}
//       </ul>
//     </article>
//   `;

//   recipeList.insertAdjacentHTML("beforeend", recipeHtml);

//   // Guardar la receta en el Local Storage
//   const savedRecipes = recipeList.innerHTML;
//   localStorage.setItem("recipes", JSON.stringify(savedRecipes));

//   // Limpiar el formulario
//   form.reset();
// }
