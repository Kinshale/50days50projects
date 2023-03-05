const backgroundImage = document.querySelector("body");
const percentage = document.querySelector(".loading-text");
const image = document.querySelector("img")

let interval = setInterval(load, 40);

let perc = 100;

function load () {
    perc--;
    percentage.innerText = `${100 - perc}%`;
    percentage.style.opacity = `${perc}%`;
    image.style.filter = `blur(${perc / 5}px)`
    if(perc == 0) {clearInterval(interval)}
}

