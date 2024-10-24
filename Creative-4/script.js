let pauseTransformX = 0;
let prevX = 0;
let newX = 0;
let startX = 0;
let endX = 0;

setTimeout(() => {
  const firstSlide = document.querySelector('.slide-first');
  firstSlide.parentElement.removeChild(firstSlide);

  const hidden = document.querySelector('.hidden');
  hidden.classList.remove('hidden');

  const sliderForward = document.querySelector('.slider-forward');
  sliderForward.classList.remove('slider-forward');
  sliderForward.classList.add('slider-forward-back');

  const slider = document.querySelector(".slider");
  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    sliderForward.classList.add('pause-animation');

    const style = window.getComputedStyle(sliderForward);
    pauseTransformX = parseInt(style.transform.split(',')[4]);
    console.log(pauseTransformX);
  });

  slider.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
    const diffX = endX - startX;
    newX = prevX + diffX;
    newX = Math.min(newX, -pauseTransformX);  // left
    newX = Math.max(newX, -1000 - pauseTransformX); // right
    slider.style.translate = `${newX}px 0px`;
  });

  slider.addEventListener("touchend", (e) => {
    console.log(newX);
    prevX = newX;
  });
}, 4000);

const video = document.getElementById('myVideo');
const screenshot = document.getElementById('screenshot');

video.addEventListener('ended', function() {
  // Приховуємо відео
  video.style.display = 'none';
  
  // Відображаємо скріншот
  screenshot.style.display = 'block';
});

screenshot.addEventListener('click', function() {
  // Приховуємо скріншот
  screenshot.style.display = 'none';
  
  // Показуємо відео і починаємо відтворення
  video.style.display = 'block';
  video.currentTime = 0; // Починаємо від початку
  video.play(); // Запускаємо відтворення
});

const muteBtn = document.querySelector('.muteBtn');
const soundBtn = document.querySelector('.soundBtn');

muteBtn.addEventListener('click', function() {
  video.muted = false; // Вимикаємо режим mute
  muteBtn.style.display = 'none'; // Приховуємо кнопку mute
  soundBtn.style.display = 'block'; // Відображаємо кнопку звук
});

// Обробник для кнопки Sound
soundBtn.addEventListener('click', function() {
  video.muted = true; // Вмикаємо режим mute
  soundBtn.style.display = 'none'; // Приховуємо кнопку звук
  muteBtn.style.display = 'block'; // Відображаємо кнопку mute
});
