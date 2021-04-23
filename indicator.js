const useCases = [
  { color: '#ca9a21', label: 'food' },
  { color: '#618c7b', label: 'home' },
  { color: '#0076d3', label: 'fashion' },
  { color: '#407a57', label: 'gardening' },
];

let useCaseTexts = document.querySelectorAll('.use-case');
let dots = document.querySelectorAll('.indicator-dot');
let galleries = document.querySelectorAll('.gallery');
let scrolldownBtn = document.querySelector('.scroll-down');

let activeIndex = 1;
var sliderInterval;

function initSlider() {
  console.log('init slider');
  activeIndex = 1;

  // render first time
  dots.forEach((text) => text.classList.remove('active'));
  useCaseTexts.forEach((text) => text.classList.remove('active'));
  galleries.forEach((gallery) => gallery.classList.remove('active'));
  dots[0].classList.add('active');
  useCaseTexts[0].classList.add('active');
  galleries[0].classList.add('active');
  scrolldownBtn.style.backgroundColor = useCases[0].color;

  // change active status after every 8s
  sliderInterval = setInterval(() => {
    console.log('activeIndex', activeIndex);
    dots.forEach((text) => text.classList.remove('active'));
    useCaseTexts.forEach((text) => text.classList.remove('active'));
    galleries.forEach((gallery) => gallery.classList.remove('active'));

    if (activeIndex > 3) {
      activeIndex = 0;
    }

    dots[activeIndex].classList.add('active');
    useCaseTexts[activeIndex].classList.add('active');
    galleries[activeIndex].classList.add('active');
    scrolldownBtn.style.backgroundColor = useCases[activeIndex].color;
    activeIndex++;
  }, 8000);
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
  galleries.forEach((gallery) => gallery.classList.remove('active'));

  setTimeout(() => {
    useCaseTexts[selectedIndex].classList.add('active');
  }, 300);
  dots[selectedIndex].classList.add('active');
  galleries[selectedIndex].classList.add('active');

  // clear old interval
  clearInterval(sliderInterval);

  // re-initialize slider
  initSlider();
}
