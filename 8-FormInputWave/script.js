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
