const slides = document.querySelectorAll('.slide')
let activeIndex = 0;

const next = document.querySelectorAll('.right');
// const next_first = document.querySelector('.next-first');
[...next].forEach(el => el.addEventListener('click', nextSlide));
// next_first.addEventListener('click', nextSlide);

function nextSlide() {
    activeIndex++;
    showSlide(activeIndex);
}

const prev = document.querySelectorAll('.left');
[...prev].forEach(el => el.addEventListener('click', prevSlide));

function prevSlide() {
    activeIndex--;
    showSlide(activeIndex);
}

function showSlide(activeIndex) {
    slides.forEach(function (slide, index) {
        if (index === activeIndex) {
            showImage(slide)
        } else {
            hideImage(slide)
        }
    });

    if (activeIndex === slides.length - 1) {
        hideButton(next[activeIndex]);
    } else {
        showButton(next[activeIndex]);
    }

    if (activeIndex === 0) {
        hideButton(prev[activeIndex]);
    } else {
        showButton(prev[activeIndex]);
    }
};

function showImage(slide) {
    slide.classList.remove('hidden');
}

function hideImage(slide) {
    slide.classList.add('hidden');
}

function hideButton(button) {
    button.setAttribute("disabled", "");
}

function showButton(button) {
    button.removeAttribute("disabled");
}



