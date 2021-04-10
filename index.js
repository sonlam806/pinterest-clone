let useCaseTexts = document.querySelectorAll(".use-case");
let activeIndex = 0;

setInterval(() => {
  useCaseTexts.forEach((text) => text.classList.remove("active"));

  useCaseTexts[activeIndex + 1].classList.add("active");
  activeIndex++;
  if (activeIndex === 3) {
    activeIndex = 0;
  }
}, 6000);
