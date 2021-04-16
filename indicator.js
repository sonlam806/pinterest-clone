let useCaseTexts = document.querySelectorAll('.use-case');
let dots = document.querySelectorAll('.indicator-dot');
let activeIndex = 0;
let useCaseTextInterval, dotsInterval;

function initSlider() {
  useCaseTextInterval = setInterval(() => {
    useCaseTexts.forEach((text) => text.classList.remove('active'));

    useCaseTexts[activeIndex + 1].classList.add('active');
    activeIndex++;
    if (activeIndex === 3) {
      activeIndex = 0;
    }
  }, 6000);

  dotsInterval = setInterval(() => {
    dots.forEach((text) => text.classList.remove('active'));
    dots[activeIndex + 1].classList.add('active');
  }, 5500);
}

initSlider();

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

  setTimeout(() => {
    useCaseTexts[selectedIndex].classList.add('active');
  }, 500);
  dots[selectedIndex].classList.add('active');

  clearInterval(useCaseTextInterval);
  clearInterval(dotsInterval);

  initSlider();
}
