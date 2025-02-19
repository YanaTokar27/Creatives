document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.querySelector(".LM_container");
  const adChoice = createAdChoice();
  appContainer.insertAdjacentElement("beforeend", adChoice);
  appContainer.classList.add("animation");

  const video = document.getElementById("myVideo");

  video.addEventListener("ended", () => {
    video.classList.add("hidden");
    btn.classList.add("hidden");
    screenshot.classList.remove("hidden");
  });

  const screenshot = document.getElementById("screenshot");

  screenshot.addEventListener("click", () => {
    btn.classList.remove("hidden");
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
});
