document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".img");
    let currentIndex = 0;
  
    // Функція для показу активного слайду
    function showSlide(index) {
      images.forEach((img, i) => {
        img.classList.add("hidden");
        if (i === index) {
          img.classList.remove("hidden");
        }
      });
    }
  
    // Відслідковуємо дотики для свайпу
    let startX = 0;
    let endX = 0;
  
    // Початок дотику
    document.querySelector(".wrapper").addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });
  
    // Рух дотику (свайп)
    document.querySelector(".wrapper").addEventListener("touchmove", (e) => {
      endX = e.touches[0].clientX;
    });
  
    // Кінець дотику
    document.querySelector(".wrapper").addEventListener("touchend", () => {
      if (startX > endX + 100) {
        // Свайп вліво (показати наступне зображення)
        if (currentIndex < images.length - 1) {
          currentIndex++;
          showSlide(currentIndex);
        }
      } else if (startX < endX - 100) {
        // Свайп вправо (показати попереднє зображення)
        if (currentIndex > 0) {
          currentIndex--;
          showSlide(currentIndex);
        }
      }
    });
  
    // Показуємо перший слайд на початку
    showSlide(currentIndex);
  });
  