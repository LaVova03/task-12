let offset = 0;
const sliderLine = document.getElementById('slider-line');
const sliderPrev = document.getElementById('slider-prev');
const sliderNext = document.getElementById('slider-next');

sliderNext.addEventListener('click', () => {
    offset += 300;
    if (offset >= 900) {
        offset = 900;
        sliderNext.style.display = 'none';
    }
    sliderPrev.style.display = 'block';
    sliderLine.style.left = -offset + 'px';
});

sliderPrev.addEventListener('click', () => {
    offset -= 300;
    if (offset <= 0) {
        offset = 0;
        sliderPrev.style.display = 'none';
    }
    sliderNext.style.display = 'block';
    sliderLine.style.left = -offset + 'px';
});
