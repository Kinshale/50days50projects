let waterInBigCup = document.querySelector(".water-big");
let airInBigCup = document.querySelector(".empty-big");
let smallCups = document.querySelectorAll(".small.cup");
let i;

smallCups.forEach((elem, i) => {
  elem.addEventListener("click", fillCups);
  elem.index = i;
});

function fillCups(event) {
  let cupIndex = event.target.index;

  if (event.target.classList.contains("filled")) {
    for (i = cupIndex + 1; i <= 11; i++) {
      smallCups[i].classList.remove("filled");
    }
  } else {
    for (i = 0; i <= cupIndex; i++) {
      smallCups[i].classList.add("filled");
    }
  }

  waterInBigCup.style.height = `${(cupIndex + 1) * 25}px`;
  airInBigCup.style.height = `${(11 - cupIndex) * 25}px`;

  setTimeout(updateText, 100, cupIndex);
}

function updateText(cupIndex) {
  waterInBigCup.innerText = `${Math.ceil((cupIndex + 1) * 8.33)}%`;
  if (cupIndex == 11) {
    airInBigCup.innerText = ``;
  } else {
    airInBigCup.innerText = `${(11 - cupIndex) * 0.25}L left`;
  }
}
