const images = document.querySelectorAll('.img')
let activeIndex = 0;

const next = document.getElementById('next');
next.addEventListener('click', nextSlide);

function nextSlide() {
    activeIndex++;
    showSlide(activeIndex);
}

const prev = document.getElementById('prev');
prev.addEventListener('click', prevSlide);

function prevSlide() {
    activeIndex--;
    showSlide(activeIndex);
}

function showSlide(activeIndex) {
    images.forEach(function (image, index) {
        if (index === activeIndex) {
            showImage(image)
        } else {
            hideImage(image)
        }
    });

    if (activeIndex === images.length - 1) {
        hideButton(next);
    } else {
        showButton(next);
    }

    if (activeIndex === 0) {
        hideButton(prev);
    } else {
        showButton(prev);
    }
};

function showImage(image) {
    image.classList.remove('hidden');
}

function hideImage(image) {
    image.classList.add('hidden');
}

function hideButton(button) {
    button.setAttribute("disabled", "");
}

function showButton(button) {
    button.removeAttribute("disabled");
}



