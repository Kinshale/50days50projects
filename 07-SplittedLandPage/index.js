let varenna = document.querySelector(".varenna-container");
let bellagio = document.querySelector(".bellagio-container");

varenna.addEventListener("mouseleave", handleLeave);
bellagio.addEventListener("mouseleave", handleLeave);
varenna.addEventListener("mouseenter", handleEnter1);
bellagio.addEventListener("mouseenter", handleEnter2);

function handleLeave(event) {
  event.target.style.flexShrink = "2";
  event.target.style.zIndex = "1";
}

function handleEnter1(event) {
  event.target.style.flexShrink = "0.5";
  bellagio.style.flexShrink = "2";
  event.target.style.zIndex = "2";
}

function handleEnter2(event) {
  event.target.style.flexShrink = "0.5";
  varenna.style.flexShrink = "2";
  event.target.style.zIndex = "2";
}
