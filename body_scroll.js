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
  // clearInterval(sliderInterval);
  overlay.style.display = "none";
  setTimeout(() => {
    window.scroll({
      top: 862,
      left: 0,
      behavior: "smooth",
    });

    footer.classList.add("active");
    // scroll down button style
    arrowIcon.classList.add("up");
    scrolldownBtn.style.backgroundColor = useCases[activeIndex].color;
    scrollDownBtn.style.top = "10%";
  }, 800);

  setTimeout(() => {
    login.classList.add("active");
  }, 900);
}

function scrollUp() {
  if (window.scrollY === 0) return;
  footer.classList.remove("active");

  setTimeout(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    login.classList.remove("active");

    scrollDownBtn.style.top = "90%";
    overlay.style.display = "block";
    arrowIcon.classList.remove("up");

    // initSlider();
  }, 800);
}

body.addEventListener("wheel", scroll, false);

