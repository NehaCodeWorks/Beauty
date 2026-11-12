const loginDialog = document.getElementById('loginDialog');
const loginForm = document.getElementById('loginForm');
const loginPhone = document.getElementById('loginPhone');
const loginMessage = document.getElementById('loginMessage');

document.querySelectorAll('.login-button').forEach(button => {
  button.addEventListener('click', () => {
    loginMessage.textContent = '';
    loginDialog.showModal();
    loginPhone.focus();
  });
});

document.querySelector('.login-dialog-close').addEventListener('click', () => {
  loginDialog.close();
});

loginDialog.addEventListener('click', event => {
  if (event.target === loginDialog) loginDialog.close();
});

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  loginMessage.textContent = 'OTP login is not connected yet.';
});
