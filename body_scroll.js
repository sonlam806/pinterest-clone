const body = document.body;
const login = document.getElementById("login");
const overlay = document.querySelector(".overlay");
const scrollDownBtn = document.getElementById("scrollDownBtn");
const arrowIcon = document.querySelector(".arrow-icon");
const footer = document.querySelector(".footer");

const scroll = function (event) {
  // scroll down
  if (event.deltaY > 0) {
    scrollDown();
    return;
  } else {
    scrollUp();
    return;
  }
};

function scrollDown() {
  // detect when user scroll to bottom of the page, prevent action
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    return;
  }
  clearInterval(sliderInterval);
  setTimeout(() => {
    window.scroll({
      top: 862,
      left: 0,
      behavior: "smooth",
    });

    overlay.style.display = "none";
    footer.classList.add("active");
    // render current activeIndex
    dots.forEach((text) => text.classList.remove("active"));
    useCaseTexts.forEach((text) => text.classList.remove("active"));
    galleries.forEach((gallery) => gallery.classList.remove("active"));

    galleries[activeIndex].classList.add("active");
    galleries[activeIndex].style.animation = "none";
    galleries[activeIndex].style.opacity = "1";
    // change the opacity for each column in active gallery
    const childrens = Array.from(galleries[activeIndex].children);
    childrens.forEach((child) => {
      // child.style.opacity = 1;
      // child.style.animation = 'none';
    });

    // scroll down button style
    arrowIcon.classList.add("up");
    scrolldownBtn.style.backgroundColor = useCases[activeIndex].color;
    scrollDownBtn.style.top = "10%";
  }, 500);

  setTimeout(() => {
    login.classList.add("active");
  }, 700);
}

function scrollUp() {
  if (window.scrollY === 0) return;

  setTimeout(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    login.classList.remove("active");

    scrollDownBtn.style.top = "90%";
    arrowIcon.classList.remove("up");
    footer.classList.remove("active");

    initSlider();
  }, 500);
}

body.addEventListener("wheel", scroll, false);

