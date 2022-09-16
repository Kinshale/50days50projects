const searchToggle = document.querySelector("button");
const widgetContainer = document.getElementById("widget-container");
const inputSearch = document.querySelector("input")
const button = document.querySelector("button")

searchToggle.onclick = function() {
    inputSearch.classList.toggle("active");
    inputSearch.innerText = "";
    button.classList.toggle("kinshale");
    inputSearch.blur();
}