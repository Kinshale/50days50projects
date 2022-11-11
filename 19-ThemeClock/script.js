const darkMode = document.querySelector(".toggle");
const needles = document.querySelectorAll(".needle");
const dateStr = document.querySelector(".date");
const html = document.querySelector("html");

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Septemper",
  "October",
  "November",
  "December",
];

darkMode.onclick = function (event) {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    event.target.innerText = "Dark Mode";
  } else {
    html.classList.add("dark");
    event.target.innerText = "Light Mode";
  }
};

window.onload = function () {
  const date = new Date();
  setTime();
  setMinute(date);
  setDay(date);
};

function setTime() {
  const date = new Date();

  let seconds = date.getSeconds();

  if (seconds == 0) setMinute(date);

  needles[2].style.transform = `rotate(${seconds * 6 - 90}deg)`;
}

function setMinute(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours == 0 && minutes == 0 && seconds == 0) setDay(date);

  needles[0].style.transform = `rotate(${
    (hours % 12) * 30 + minutes / 2 - 90
  }deg)`;
  needles[1].style.transform = `rotate(${minutes * 6 - 90}deg)`;
}

function setDay(date) {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();
  let dayOfMonth = date.getDate();
  dateStr.innerText = `${daysOfWeek[day]}, ${months[month]} ${dayOfMonth}, ${year}`;
}

setInterval(setTime, 1000);
