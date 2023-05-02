const $main = document.querySelector(".recipes");
const $title = document.getElementById("title__input");
const $description = document.getElementById("description__input");
const [$ingredients, $steps] = document.querySelectorAll(".register__list");
const $save = document.querySelector(".register__save");
const $frag_card = document.createDocumentFragment();
const $card = `
      <article class="recipes__cards">
        <div class="recipes__wrapper">
          <h2 class="recipes__title"></h2>
          <p class="recipes__description">
          </p>
        </div>
        <ol class="recipes__list recipes__list--ingredients">
        </ol>
        <ol class="recipes__list recipes__list--stpes">
        </ol>
        <div class="recipes__buttons">
          <button class="button button--settings">Editar</button>
          <button class="button button--revome">Eliminar</button>
        </div>
      </article>
  `;
$save.addEventListener("click", () => {
  $main.insertAdjacentHTML("beforeend", $card);
  const $new_card = $main.lastElementChild;
  const $list_in = $new_card.querySelector(".recipes__list--ingredients");
  Array.from($ingredients.children).forEach(label => {
    const $item = document.createElement("li");
    $item.textContent = label.firstElementChild.value;
    $frag_card.appendChild($item);
  });
  $list_in.appendChild($frag_card);
});
