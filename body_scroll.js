const body = document.body;
const login = document.querySelector('.login');
const overlay = document.querySelector('.overlay');

body.addEventListener('wheel', function (event) {
  // scroll down
  if (event.deltaY > 0) {
    setTimeout(() => {
      window.scroll({
        top: 1000,
        left: 0,
        behavior: 'smooth',
      });

      login.classList.add('active');
      overlay.style.display = 'none';

      clearInterval(useCaseTextInterval);
      clearInterval(dotsInterval);
      clearInterval(galleriesInterval);
    }, 500);
    // return;
  } else {
    console.log('scroll up');
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      login.classList.remove('active');

      initSlider();
    }, 500);
  }
});
