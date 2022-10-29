let image = document.querySelector(".image");
let boxes = document.querySelectorAll(".box");

image.addEventListener("dragstart", function () {
  setTimeout(() => (this.className = ""), 0);
});

image.addEventListener("dragend", function () {
  this.className = "image";
});

boxes.forEach((box) => {
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", dragDrop);
  box.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
});

function dragEnter(e) {
  console.log("enter");
  e.target.classList.add("hover");
}
function dragLeave(e) {
  e.target.classList.remove("hover");
}
function dragDrop(e) {
  e.target.classList.remove("hover");
  e.target.append(image);
}
