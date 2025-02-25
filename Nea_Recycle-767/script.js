document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.querySelector(".container");
  appContainer.classList.add("start-animation");
});

const video = document.getElementById("myVideo");
const screenshot = document.getElementById("screenshot");

video.addEventListener("ended", () => {
  video.classList.add("hidden");
  screenshot.classList.remove("hidden");
});

screenshot.addEventListener("click", () => {
  screenshot.classList.add("hidden");

  video.classList.remove("hidden");
  video.currentTime = 0;
  video.play();
});

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  video.muted = !video.muted;
  btn.classList.toggle("sound-btn");
});