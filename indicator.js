let useCaseTexts = document.querySelectorAll('.use-case');
let dots = document.querySelectorAll('.indicator-dot');
let galleries = document.querySelectorAll('.gallery');
let activeIndex = 0;
let useCaseTextInterval, dotsInterval, galleriesInterval;

function initSlider(duration, delayTime) {
  dotsInterval = setInterval(() => {
    activeIndex++;
    dots.forEach((text) => text.classList.remove('active'));

    if (activeIndex === 4) {
      activeIndex = 0;
    }

    dots[activeIndex].classList.add('active');
  }, 7500);

  useCaseTextInterval = setInterval(() => {
    useCaseTexts.forEach((text) => text.classList.remove('active'));

    useCaseTexts[activeIndex].classList.add('active');
  }, 7500);

  galleriesInterval = setInterval(() => {
    galleries.forEach((gallery) => gallery.classList.remove('active'));
    galleries[activeIndex].classList.add('active');
  }, 7500);
}

initSlider(6000, 300);

for (let index = 0; index < dots.length; index++) {
  const element = dots[index];
  element.addEventListener('click', () => {
    return handleActiveSlide(index);
  });
}

function handleActiveSlide(selectedIndex) {
  activeIndex = selectedIndex;
  useCaseTexts.forEach((text) => text.classList.remove('active'));
  dots.forEach((text) => text.classList.remove('active'));
  galleries.forEach((gallery) => gallery.classList.remove('active'));

  setTimeout(() => {
    useCaseTexts[selectedIndex].classList.add('active');
  }, 300);
  dots[selectedIndex].classList.add('active');
  galleries[selectedIndex].classList.add('active');

  // clear old interval
  clearInterval(useCaseTextInterval);
  clearInterval(dotsInterval);
  clearInterval(galleriesInterval);

  // re-initialize interval
  initSlider(6000, 300);
}
