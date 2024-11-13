const firstSlide = document.querySelector(".slide-first");

firstSlide.addEventListener("animationend", (event) => {
  const delayAfterAnimation = 500;
  setTimeout(() => {
    firstSlide.parentElement.removeChild(firstSlide);

    const hidden = document.querySelector(".hidden-woman");
    hidden.classList.remove("hidden-woman");

    const sliderForward = document.querySelector(".slider-forward");
    sliderForward.classList.remove("slider-forward");
    sliderForward.classList.add("slider-forward-back");

    let pauseTranslateX = 0;

    const slider = document.querySelector(".slider");

    slider.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      sliderForward.classList.add("pause-animation");

      const computedStyle = window.getComputedStyle(sliderForward);
      pauseTranslateX = parseInt(computedStyle.transform.split(",")[4]);
    });

    let prevX = 0;
    let newX = 0;

    slider.addEventListener("touchmove", (e) => {
      const endX = e.touches[0].clientX;
      const diffX = endX - startX;
      newX = prevX + diffX;
      newX = Math.min(newX, -pauseTranslateX); // left
      const minAnimationTranslateX = -1000;
      newX = Math.max(newX, minAnimationTranslateX - pauseTranslateX); // right
      slider.style.translate = `${newX}px 0px`;
    });

    slider.addEventListener("touchend", (e) => {
      prevX = newX;
    });
  }, delayAfterAnimation);
});

const video = document.getElementById("myVideo");
const screenshot = document.getElementById("screenshot");

video.addEventListener("ended", function () {
  video.classList.add("hidden");

  // Display screenshot
  screenshot.classList.remove("hidden");
});

screenshot.addEventListener("click", function () {
  screenshot.classList.add("hidden");

  video.classList.remove("hidden");
  video.currentTime = 0; // Start from the begining
  video.play(); // Start to play
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
