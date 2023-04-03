// ----------- Varibles -----------
const $categories = document.querySelector(".categories");
// --- Funcionalidad Categoria ---
leftToRigth($categories);
function leftToRigth(element) {
  window.addEventListener("scroll", () => {
    element.classList.toggle("categories__show", window.scrollY > 175);
  });
}
