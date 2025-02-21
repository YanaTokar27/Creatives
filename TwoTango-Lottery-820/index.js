document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.querySelector(".LM_container");
  const adChoice = createAdChoice();
  appContainer.insertAdjacentElement("beforeend", adChoice);
  appContainer.classList.add("animation");

  const dollarImages = [
    "https://i.loopme.me/html/TwoTango_VA_Lottery_President_Day_US_Jan25_VersionB/assets/project_images/DOLLAR_LIGHT.png",
    "https://i.loopme.me/html/TwoTango_VA_Lottery_President_Day_US_Jan25_VersionB/assets/project_images/DOLLARY_MEDIUM.png",
    "https://i.loopme.me/html/TwoTango_VA_Lottery_President_Day_US_Jan25_VersionB/assets/project_images/DOLLAR_DARK.png",
  ];

  function createDollarElement(number) {
    for (let i = 0; i < number; i++) {
      const dollarElement = document.createElement("div");
      dollarElement.classList.add("dollar");

      const randomImage = dollarImages[Math.floor(Math.random() * dollarImages.length)];
      dollarElement.style.backgroundImage = `url(${randomImage})`;

      const MIN_SIZE = 10;
      const MAX_SIZE = 30;

      const width = MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE);
      const heigth = 2 * width;

      const leftPosition = (i / number) * 100 - width / 2;

      const MIN_DURATION = 8;
      const MAX_DURATION = 20;
      const animationDuration = MIN_DURATION + Math.random() * (MAX_DURATION - MIN_DURATION);

      const DELAY = 7;
      const animationDelay = Math.random() * DELAY;

      dollarElement.style.width = `${width}vw`;
      dollarElement.style.height = `${heigth}vw`;
      dollarElement.style.left = `${leftPosition}vw`;
      dollarElement.style.animationDuration = `${animationDuration}s`;
      dollarElement.style.animationDelay = `${animationDelay}s`;

      const dollarsContainer = document.querySelector(".dollars_container");
      dollarsContainer.appendChild(dollarElement);
    }
  }
  createDollarElement(10);
});
