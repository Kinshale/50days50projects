let numOfHiddenBoxes = 9;
let windowHeight = document.documentElement.clientHeight;
console.log(windowHeight);

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (
    document.documentElement.getBoundingClientRect().bottom - windowHeight <=
    230 * (numOfHiddenBoxes - 1)
  ) {
    numOfHiddenBoxes--;
    document
      .querySelector(`.box:nth-of-type(${10 - numOfHiddenBoxes})`)
      .classList.add("visible");
  }

  if (
    document.documentElement.getBoundingClientRect().bottom - windowHeight >=
    230 * numOfHiddenBoxes + 40
  ) {
    if (numOfHiddenBoxes == 9) return;
    document
      .querySelector(`.box:nth-of-type(${10 - numOfHiddenBoxes})`)
      .classList.remove("visible");
    numOfHiddenBoxes++;
  }
}
