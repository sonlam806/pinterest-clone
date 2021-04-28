const signUpBtn = document.getElementById('sign-up');
const loginBtn = document.getElementById('log-in');
const signUpModal = document.getElementById('sign-up-modal');

signUpBtn.addEventListener('click', () => {
  signUpModal.classList.remove('hide');
  signUpModal.classList.add('show');
});
