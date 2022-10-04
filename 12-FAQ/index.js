let pElements = document.querySelectorAll("p");
let timesIcons = document.querySelectorAll(".faq-toggle .fa-times");

pElements.forEach((elem) => elem.classList.add("inactive"));
timesIcons.forEach((elem) => elem.classList.add("inactive"));

window.addEventListener("click", handleClick);

let selected;

function handleClick(event) {
  if (event.target.tagName != "I") return;

  selected = event.target;
  let faqcontainer = selected.parentElement.parentElement;
  let pElem = faqcontainer.children[2];

  faqcontainer.classList.toggle("white-back");
  pElem.classList.toggle("inactive");

  toggleButton(selected);
}

function toggleButton(selected) {
  let otherButton =
    selected.classList[1] == "fa-chevron-down"
      ? selected.nextSibling
      : selected.previousSibling;

  selected.classList.add("inactive");

  otherButton.classList.remove("inactive");
}
