const rotateButton = document.getElementById("tob-container");
const reverseRotateButton = document.getElementById("x-container");
const bodyToRotate = document.getElementById("body-container");
const sunRotating = document.getElementById("toggles-container");

rotateButton.addEventListener("click", rotate);
reverseRotateButton.addEventListener("click", antiRotate);

function rotate(){
    bodyToRotate.classList.add("rotate");
    sunRotating.classList.add("rotate-90")
}

function antiRotate(){
    bodyToRotate.classList.remove("rotate");
    sunRotating.classList.remove("rotate-90")
}