const allTabs = document.querySelectorAll(".tabs h3");
const allTabContents = document.querySelectorAll(".tab-content div");

allTabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    allTabContents.forEach((content) => {
      content.classList.remove("active");
    });
    allTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    allTabContents[i].classList.add("active");
    allTabs[i].classList.add("active");
  });
});
