let [emailLabel, passwordLabel] = document.querySelectorAll(
  ".form-control label"
);
let [emailInput, passwordInput] = document.querySelectorAll(
  ".form-control input"
);

let button = document.querySelector("button");

handleAddSpanElem(emailLabel);
handleAddSpanElem(passwordLabel);

function handleAddSpanElem(string) {
  string.innerHTML = string.innerText
    .split("")
    .map((letter) => `<span class = "not-selected">${letter}</span>`)
    .join("");
}

window.addEventListener("click", handleClick);

let previousClicked, clicked;

function handleClick(event) {
  clicked =
    event.target == button
      ? emailInput.value != ""
        ? passwordInput
        : emailInput
      : event.target;

  handleColorChange(clicked, previousClicked);
  handleWaveAnim(clicked, previousClicked);

  previousClicked = clicked;
}

function handleColorChange(clicked, previousClicked) {
  if (clicked == previousClicked) return;

  if (clicked == emailInput || clicked == passwordInput) {
    clicked.nextSibling.classList.add("active");
    clicked.parentElement.classList.add("active-border");
  }
  if (
    (previousClicked == emailInput || previousClicked == passwordInput) &&
    previousClicked.value == ""
  ) {
    previousClicked.nextSibling.classList.remove("active");
    previousClicked.parentElement.classList.remove("active-border");
  }
}

function handleWaveAnim(clicked, previousClicked) {
  if (clicked == previousClicked) return;

  switch (clicked) {
    case emailInput:
      for (let i = 0; i < 5; i++) {
        setTimeout(kinshale, i * 100, i, emailLabel, true);
      }
      break;
    case passwordInput:
      for (let i = 0; i < 8; i++) {
        setTimeout(kinshale, i * 100, i, passwordLabel, true);
      }
      break;
  }
  if (
    (previousClicked == emailInput || previousClicked == passwordInput) &&
    previousClicked.value == ""
  ) {
    switch (previousClicked) {
      case emailInput:
        for (let i = 0; i < 5; i++) {
          setTimeout(kinshale, i * 100, i, emailLabel, false);
        }
        break;
      case passwordInput:
        for (let i = 0; i < 8; i++) {
          setTimeout(kinshale, i * 100, i, passwordLabel, false);
        }
        break;
    }
  }
}

function kinshale(i, label, removeOrAdd) {
  removeOrAdd
    ? label.childNodes[i].classList.remove("not-selected")
    : label.childNodes[i].classList.add("not-selected");
}
