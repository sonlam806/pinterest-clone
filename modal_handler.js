const signUpBtn = document.getElementById("sign-up");
const loginBtn = document.getElementById("log-in");
const signUpModal = document.getElementById("sign-up-modal");
const closeSignupBtn = document.getElementById("close-sign-up-btn");

// toggle SignUp modal
signUpBtn.addEventListener("click", () => {
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

