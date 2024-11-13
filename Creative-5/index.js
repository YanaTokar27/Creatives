const lamp = document.querySelector(".lampContainer");
const displayModal = document.querySelector(".modalOverlay");
const closeBtn = document.querySelector(".closeBtn");
const pictures = document.querySelectorAll(".picture");

lamp.addEventListener("click", () => {
  displayModal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  displayModal.classList.add("hidden");
});

function pixelValueToInt(valuePx) {
  if (!valuePx) {
    return 0;
  }
  return parseInt(valuePx.replace('px', ''));
}

// picture.style.left = event.clientX - (event.clientX - picture.style.left)

pictures.forEach(picture => {
  picture.onmousedown = function (event) {
    let left = pixelValueToInt(picture.style.left);
    let top = pixelValueToInt(picture.style.top);
  
    let shiftX = event.clientX - left;
    let shiftY = event.clientY - top;
  
    moveAt(event.clientX, event.clientY);
  
    // переносимо м’яч на координати (clientX, clientY)
    // додатково враховуючи початковий зсув відносно курсору миші
    function moveAt(clientX, clientY) {
      picture.style.left = clientX - shiftX + "px";
      picture.style.top = clientY - shiftY + "px";
    }
  
    function onMouseMove(event) {
      moveAt(event.clientX, event.clientY);
    }
  
    // пересуваємо м’яч при mousemove
    document.addEventListener("mousemove", onMouseMove);
  
    // відпускаємо м’яч, видаляємо непотрібні обробники подій
    picture.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      picture.onmouseup = null;
    };
  };
  
  picture.ondragstart = function () {
    return false;
  };
});

