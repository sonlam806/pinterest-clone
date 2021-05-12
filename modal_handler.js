const openSignUpModalBtn = document.getElementById("sign-up");
const closeSignupBtn = document.getElementById("close-sign-up-btn");
const signUpModal = document.getElementById("sign-up-modal");
const openLogInModalBtn = document.getElementById("log-in");
const closeLogInModalBtn = document.getElementById("close-log-in-btn");
const loginModal = document.getElementById("log-in-modal");

// toggle SignUp modal
openSignUpModalBtn.addEventListener("click", () => {
  // prevent document scrolling event
  body.removeEventListener("wheel", scroll);
  // show the modal
  signUpModal.classList.remove("hide");
  signUpModal.classList.add("show");
});

closeSignupBtn.addEventListener("click", () => {
  // re-initialize wheel scroll event
  body.addEventListener("wheel", scroll);

  signUpModal.classList.remove("show");
  signUpModal.classList.add("hide");
});

// toggle LogIn Modal
openLogInModalBtn.addEventListener("click", () => {
  // prevent document scrolling event
  body.removeEventListener("wheel", scroll);
  // show the modal
  loginModal.classList.remove("hide");
  loginModal.classList.add("show");
});

closeLogInModalBtn.addEventListener("click", () => {
  // re-initialize wheel scroll event
  body.addEventListener("wheel", scroll);

  loginModal.classList.remove("show");
  loginModal.classList.add("hide");
});

