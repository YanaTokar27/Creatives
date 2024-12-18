document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.querySelector(".container");
  appContainer.classList.add("start-animation");
  });

const video = document.getElementById("myVideo");
const screenshot = document.getElementById("screenshot");

video.addEventListener("ended", function () {
  video.classList.add("hidden");

  screenshot.classList.remove("hidden");
});

screenshot.addEventListener("click", function () {
  screenshot.classList.add("hidden");

  video.classList.remove("hidden");
  video.currentTime = 0;
  video.play();
});

const muteBtn = document.querySelector(".mute-btn");
const soundBtn = document.querySelector(".sound-btn");

muteBtn.addEventListener("click", () => {
  video.muted = false;
  muteBtn.classList.add("hidden");
  soundBtn.classList.remove("hidden");
});

soundBtn.addEventListener("click", () => {
  video.muted = true;
  soundBtn.classList.add("hidden");
  muteBtn.classList.remove("hidden");
});
