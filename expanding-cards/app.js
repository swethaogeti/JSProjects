const panels = document.querySelectorAll(".panel");

const removeActive = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
console.log(removeActive());
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActive();

    panel.classList.add("active");
  });
});
