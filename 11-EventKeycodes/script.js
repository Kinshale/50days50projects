let startBtn = document.getElementById("start-btn");
let eventKey = document.querySelector(".boxes:nth-of-type(1) .display");
let eventKeyCode = document.querySelector(".boxes:nth-of-type(2) .display");
let eventCode = document.querySelector(".boxes:nth-of-type(3) .display");
let firstTime = true;

window.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
  if (firstTime) {
    document
      .querySelectorAll(".boxes")
      .forEach((box) => box.classList.remove("invisible"));
    startBtn.classList.add("invisible");
    firstTime = false;
  }

  eventKey.innerText = event.key;
  eventKeyCode.innerText = event.keyCode;
  eventCode.innerText = event.code;
}

// let arrOfChar = ["a", "b", "c", "d", "e", "f"];
// let totalPerm = factorial(arrOfChar.length);

// function factorial(num) {
//   if (num == 1) return 1;
//   return num * factorial(num - 1);
// }

// let permutations = Array.from({ length: totalPerm }, () =>
//   Array(arrOfChar.length)
// );

// // j --> Index of the permutation
// // i --> Index of the character that makes up a permutation

// for (let j = 0; j < totalPerm; j++) {
//   remaningChar = [...arrOfChar];
//   let fact = totalPerm;

//   for (let i = 0; i < arrOfChar.length; i++) {
//     let index = Math.floor((j % fact) / (fact / remaningChar.length)); //
//     fact /= remaningChar.length; // if there 5 characters, fact assumes the values 5!, 4!, 3!, 2!, 1!

//     let letterToAdd = remaningChar[index];
//     permutations[j][i] = letterToAdd;
//     remaningChar = remaningChar.filter((elem) => elem != letterToAdd); // every loop we remove from the possibilities, the charachter previously added
//   }
// }

// console.log(permutations);
