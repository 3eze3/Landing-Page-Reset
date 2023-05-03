const $main = document.querySelector(".recipes");
const $titleInput = document.getElementById("title__input");
const $descriptionInput = document.getElementById("description__input");
const [$ingredients, $steps] = document.querySelectorAll(".register__list");
const $save = document.querySelector(".register__save");
const $data = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : [];
function createRecipeCard(title, description, ingredients, steps) {
  const $card = `
      <article class="recipes__cards">
        <div class="recipes__wrapper">
          <h2 class="recipes__title"> ${title}</h2>
          <p class="recipes__description">
            ${description}
          </p>
        </div>
        <ol class="recipes__list recipes__list--ingredients">
              ${ingredients
                .map(item => `<li class="recipes__item">${item}</li>`)
                .join("")}
        </ol>
        <ol class="recipes__list recipes__list--stpes">
              ${steps
                .map(item => `<li class="recipes__item">${item}</li>`)
                .join("")}
        </ol>
        <div class="recipes__buttons">
          <button class="button button--settings">Editar</button>
          <button class="button button--revome">Eliminar</button>
        </div>
      </article>
  `;
  return $card;
}
function addRecipeCard() {
  const title = $titleInput.value;
  const descriptin = $descriptionInput.value;
  const ingredients = Array.from($ingredients.children).map(
    label => label.firstElementChild.value
  );
  const steps = Array.from($steps.children).map(
    label => label.firstElementChild.value
  );
  const $new_card = createRecipeCard(title, descriptin, ingredients, steps);
  $main.insertAdjacentHTML("beforeend", $new_card);
}
function saveStorage() {}
$save.addEventListener("click", () => addRecipeCard());
