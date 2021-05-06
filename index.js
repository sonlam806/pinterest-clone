const signUpBtn = document.getElementById("sign-up");
const loginBtn = document.getElementById("log-in");
const signUpModal = document.getElementById("sign-up-modal");

// toggle SignUp modal
signUpBtn.addEventListener("click", () => {
  // prevent document scrolling event
  // body.removeEventListener("scroll", scroll);
  signUpModal.classList.remove("hide");
  signUpModal.classList.add("show");
});

