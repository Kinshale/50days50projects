let [ytSubs, ttFols, ghStars] = [13, 81, 2];

let counters = document.querySelectorAll(".social h2");

let intervalId = setInterval(incrementAnim, 5);
let counter = 1;

function incrementAnim() {
  if (counter == 1000) {
    clearInterval(intervalId);
  }
  counters[0].innerText = `${Math.floor(ytSubs)}`;
  counters[1].innerText = `${Math.floor(ttFols)}`;
  counters[2].innerText = `${Math.floor(ghStars)}`;

  ytSubs += 13;
  ttFols += 81;
  ghStars += 2;

  counter++;
}
