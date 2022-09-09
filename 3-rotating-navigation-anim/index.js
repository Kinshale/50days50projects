const rotateButton = document.getElementById("tob-container");
const reverseRotateButton = document.getElementById("x-container");
const bodyToRotate = document.getElementById("body-container");
const sunRotating = document.getElementById("toggles-container");
const navElements = document.querySelectorAll("ul li")

rotateButton.addEventListener("click", rotate);
reverseRotateButton.addEventListener("click", antiRotate);

function rotate(){
    bodyToRotate.classList.add("rotate");
    sunRotating.classList.add("rotate-90");
    navElements.forEach((elem) => elem.style.transform = "translateX(0%)")
}

function antiRotate(){
    bodyToRotate.classList.remove("rotate");
    sunRotating.classList.remove("rotate-90");
    navElements.forEach((elem) => elem.style.transform = " translateX(-150%)")
}