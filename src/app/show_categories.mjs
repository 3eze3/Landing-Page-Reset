const $sectionCategories = document.querySelector(".categories");
function showCategories() {
  window.addEventListener("scroll", () => {
    $sectionCategories.classList.toggle(
      "categories__show",
      window.scrollY > 95
    );
  });
}
showCategories();
