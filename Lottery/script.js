document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.querySelector(".container");
  appContainer.classList.add("start-animation");
});

const snowContainer = document.querySelector('.snow-container');
const numberOfSnowflakes = 30;

for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    // Випадкове розташування та тривалість (random - діапазон [0 до 1])
    const size = Math.random() * 2 + 0.3; // Розмір від 0.3 до 2.3
    const leftPosition = Math.random() * 100; // Випадкове розташування
    const animationDuration = Math.random() * 3 + 10; // Тривалість від 10 до 13 секунд
    const animationDelay = Math.random() * 10; // Затримка до 10 секунд

    // Додаємо стилі для кожної сніжинки
    snowflake.style.width = `${size}vw`;
    snowflake.style.height = `${size}vw`;
    snowflake.style.left = `${leftPosition}vw`;
    snowflake.style.animationDuration = `${animationDuration}s`;
    snowflake.style.animationDelay = `${animationDelay}s`;

    snowContainer.appendChild(snowflake);
}



