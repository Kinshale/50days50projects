let textarea = document.querySelector("textarea");
let tagsContainer = document.querySelector(".tags-container");

textarea.addEventListener("keyup", createTag);
textarea.focus();

function createTag(event) {
  let arrayOfTags = event.target.value
    .split(",")
    .map((tag) => tag.trim())
    .filter((elem) => elem != "");

  tagsContainer.innerHTML = "";

  arrayOfTags.forEach((text) => {
    let tag = document.createElement("span");
    tag.className = "tag";
    tag.innerText = text;
    tagsContainer.append(tag);
  });

  if (event.key === "Enter") {
    setTimeout(() => {
      event.target.value = "";
    }, 0);

    textarea.blur();
    randomSelect();
  }
}

function randomSelect() {
  let i = 20;
  let tag;

  let intervalId = setInterval(() => {
    if (tag) unHighlight(tag);
    if (i == 0) clearInterval(intervalId);
    tag = randomChoice();
    highlight(tag);
    i--;
  }, 100);
}

function randomChoice() {
  let tagsArray = document.querySelectorAll(`.tag`);
  return tagsArray[Math.floor(Math.random() * tagsArray.length)];
}

function highlight(tag) {
  tag.classList.add("highlight");
}

function unHighlight(tag) {
  tag.classList.remove("highlight");
}
