let button = document.querySelector(".btn");
let circle = document.querySelector(".circle");

console.log(circle);

button.addEventListener("click", rippleEffect);

function rippleEffect(e) {
  let pageX = e.layerX;
  let pageY = e.layerY;

  moveCircle(circle, pageX, pageY);
  circleAnimation(circle);
}

function moveCircle(circle, x, y) {
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
}

function circleAnimation(circle) {
  let start = Date.now();
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    if (timePassed > 500) {
      circle.style.transform = "scale(1)";
      clearInterval(timer);
      return;
    }
    enlarge(timePassed);
  }, 10);
}

function enlarge(timePassed) {
  circle.style.transform = `scale(${(5 * timePassed) / 10})`;
}
