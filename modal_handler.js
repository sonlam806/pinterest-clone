const closeSignupBtn = document.getElementById("close-sign-up-btn");

closeSignupBtn.addEventListener("click", () => {
  signUpModal.classList.remove("show");
  signUpModal.classList.add("hide");
});
