class RecipeCard {
  constructor(title, description, ingredients, steps) {
    this.title = title;
    this.description = description;
    this.ingredients = ingredients;
    this.steps = steps;
  }
  createRecipeCard() {
    const $card = document.createElement("article");
    $card.className = "recipes__cards";
    $card.innerHTML = `
        <div class="recipes__wrapper ">
          <h2 class="recipes__title"> ${this.title}</h2>
          <p class="recipes__description"  >
            ${this.description}
          </p>
        </div>
        <ol class="recipes__list recipes__list--ingredients">
              ${this.ingredients
                .map(item => `<li class="recipes__item">${item}</li>`)
                .join("")}
        </ol>
        <ol class="recipes__list recipes__list--stpes">
              ${this.steps
                .map(item => `<li class="recipes__item"  >${item}</li>`)
                .join("")}
        </ol>
        <div class="recipes__buttons">
          <button class="button button--settings">Editar</button>
          <button class="button button--remove">Eliminar</button>
        </div>
      <button class="register__btn--update">✔</button>`;

    return $card;
  }
}

const $main = document.querySelector(".recipes");
const $titleInput = document.getElementById("title__input");
const $descriptionInput = document.getElementById("description__input");
const [$ingredients, $steps] = document.querySelectorAll(".register__list");
const $save = document.querySelector(".register__save");
// local storage
const $data = localStorage.getItem("card")
  ? JSON.parse(localStorage.getItem("card"))
  : [];

function saveCard(card) {
  $data.push(card);
  localStorage.setItem("card", JSON.stringify($data));
}

function inserRecipeCard() {
  const title = $titleInput.value;
  const description = $descriptionInput.value;
  const ingredients = Array.from($ingredients.children).map(
    label => label.firstElementChild.value
  );
  const steps = Array.from($steps.children).map(
    label => label.firstElementChild.value
  );
  const recipeCard = new RecipeCard(title, description, ingredients, steps);
  const $new_card = recipeCard.createRecipeCard();
  saveCard($new_card.outerHTML);
  $main.appendChild($new_card);
}

$save.addEventListener("click", inserRecipeCard);
$data.forEach(card => $main.insertAdjacentHTML("beforeend", card));
