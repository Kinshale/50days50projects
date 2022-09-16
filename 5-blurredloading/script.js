const backgroundImage = document.querySelector("body");
const percentage = document.querySelector(".loading-text");

let interval = setInterval(load, 50);

let perc = 0;

function load () {
    perc++;
    percentage.innerText = `${perc}%`;
    percentage.style.opacity = `${100 - perc}%`;
    if(perc == 100) {clearInterval(interval)}
}