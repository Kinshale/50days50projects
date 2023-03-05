const sounds = [
  "barks",
  "door",
  "geese",
  "rowing",
  "game-over",
  "thunderstorm",
  "ringtone",
];

let container = document.querySelector("#buttons");

sounds.forEach((sound) => {
  let button = document.createElement("button");

  button.classList.add("btn");
  button.innerText = sound;

  container.prepend(button);

  button.onclick = function () {
    stopSongs();
    document.getElementById(sound).play();
  };

  button.ondblclick = function () {
    stopSongs();
  };
});

stopSongs = () => {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
};
