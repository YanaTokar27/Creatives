document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.querySelector(".LM_container");
  const adChoice = createAdChoice();
  appContainer.insertAdjacentElement("beforeend", adChoice);
  appContainer.classList.add("animation");

  function changeOrientation() {
    const landscapeBlock = document.querySelector(".LM_landscape");

    if (window.matchMedia("(orientation: landscape)").matches) {
      landscapeBlock.style.display = "block";
    } else {
      landscapeBlock.style.display = "none";
    }
  }

  window.addEventListener("orientationchange", changeOrientation);
  window.addEventListener("resize", changeOrientation);

  changeOrientation();
});
