const $buttonsList = document.querySelectorAll(".register__btn");
function addElements() {
  const $list = this.parentElement.nextElementSibling;
  const $itemList = `
  <label class="register__item">
    <input class="register__ingredient" type="text" 
    placeholder="Enter your recipe..." />
    <button class="register__btn register__btn--remove">X</button>
  </label>`;
  $list.insertAdjacentHTML("beforeend", $itemList);
  removeItem($list);
}
function removeItem($list) {
  const $removeButton = $list.lastElementChild.querySelector(
    ".register__btn--remove"
  );
  $removeButton.addEventListener("click", () =>
    $list.removeChild($removeButton.parentElement)
  );
}
$buttonsList.forEach(button => button.addEventListener("click", addElements));
