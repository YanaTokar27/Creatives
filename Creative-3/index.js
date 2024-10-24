const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.left');
const nextButton = document.querySelector('.right');

let currentIndex = 0;
const slideWidth = slides[0].clientWidth;  // Ширина слайду (320px)

function updateSlidePosition() {
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;  // Повертаємось до першого слайду
  }
  updateSlidePosition();
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1;  // Повертаємось до останнього слайду
  }
  updateSlidePosition();
});
