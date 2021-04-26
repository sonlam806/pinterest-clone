const body = document.body;
const login = document.querySelector(".login");
const overlay = document.querySelector(".overlay");
const scrollDownBtn = document.getElementById("scrollDownBtn");

body.addEventListener("wheel", function (event) {
  console.log(event);
  console.log(window);
  // scroll down
  if (event.deltaY > 0) {
    scrollDown();
    return;
  } else {
    scrollUp();
    return;
  }
});

function scrollDown() {
  clearInterval(sliderInterval);
  setTimeout(() => {
    window.scroll({
      top: 1000,
      left: 0,
      behavior: "smooth",
    });

    login.classList.add("active");
    overlay.style.display = "none";
    // render current activeIndex
    dots.forEach((text) => text.classList.remove("active"));
    useCaseTexts.forEach((text) => text.classList.remove("active"));
    galleries.forEach((gallery) => gallery.classList.remove("active"));

    galleries[activeIndex].classList.add("active");
    galleries[activeIndex].style.animation = "none";
    galleries[activeIndex].style.opacity = "1";
    scrolldownBtn.style.backgroundColor = useCases[activeIndex].color;
  }, 500);
}

function scrollUp() {
  setTimeout(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    login.classList.remove("active");

    initSlider();
  }, 500);
}
