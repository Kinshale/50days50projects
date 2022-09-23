let [emailLabel, passwordLabel] = document.querySelectorAll(
  ".form-control label"
);
let [emailInput, passwordInput] = document.querySelectorAll(
  ".form-control input"
);

handleAddSpanElem(emailLabel);
handleAddSpanElem(passwordLabel);

function handleAddSpanElem(string) {
  string.innerHTML = string.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style = "transition-delay: ${index * 100}ms">${letter}</span>`
    )
    .join("");
}

let button = document.querySelector("button");

button.addEventListener("mousedown", handleClick);

function handleClick(event) {
  event.preventDefault();
}
