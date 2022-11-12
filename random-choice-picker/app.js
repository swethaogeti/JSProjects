const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");
textarea.focus();
textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  randomSelect();
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");

    tagEl.innerText = tag;
    tagEl.classList.add("tag");
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandom();
    if (randomTag !== undefined) {
      highlightTag(randomTag);

      setTimeout(() => {
        unHighlight(randomTag);
      }, 100);
    }
  }, 100);

  setTimeout(() => {
    clearTimeout(interval);

    setTimeout(() => {
      const randomTag = pickRandom();
      highlightTag(randomTag);
    }, 100);
  }, times * 30);
}

function pickRandom() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlight(tag) {
  tag.classList.remove("highlight");
}
