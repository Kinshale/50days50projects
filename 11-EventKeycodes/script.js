let startBtn = document.getElementById("start-btn");
let eventKey = document.querySelector(".boxes:nth-of-type(1) .display");
let eventKeyCode = document.querySelector(".boxes:nth-of-type(2) .display");
let eventCode = document.querySelector(".boxes:nth-of-type(3) .display");
let firstTime = true;

window.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
  if (firstTime) {
    document
      .querySelectorAll(".boxes")
      .forEach((box) => box.classList.remove("invisible"));
    startBtn.classList.add("invisible");
    firstTime = false;
  }

  eventKey.innerText = event.key;
  eventKeyCode.innerText = event.keyCode;
  eventCode.innerText = event.code;
}
