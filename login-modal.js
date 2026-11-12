const loginDialog = document.getElementById('loginDialog');
const loginForm = document.getElementById('loginForm');
const loginTitle = document.getElementById('loginDialogTitle');
const loginFormMarkup = loginForm.innerHTML;
let showingRegister = false;

document.querySelectorAll('.login-button').forEach(button => {
  button.addEventListener('click', () => {
    showLoginForm();
    loginDialog.showModal();
    requestAnimationFrame(() => loginForm.querySelector('#loginPhone').focus());
  });
});

function showLoginForm() {
  showingRegister = false;
  loginTitle.textContent = 'Login to enjoy Suji Korea';
  loginForm.innerHTML = loginFormMarkup;
}

function showRegisterForm() {
  showingRegister = true;
  loginTitle.textContent = 'Create your Suji Korea account';
  loginForm.innerHTML = `
    <button class="login-dialog-close" type="button" aria-label="Close registration">&times;</button>
    <input class="register-input" name="username" type="text" autocomplete="username"
           placeholder="Username" aria-label="Username" required>
    <input class="register-input" name="email" type="email" autocomplete="email"
           placeholder="Email address" aria-label="Email address" required>
    <input class="register-input" name="password" type="password" autocomplete="new-password"
           placeholder="Password" aria-label="Password" minlength="8" required>
    <button class="login-submit" type="submit">Register</button>
    <p class="login-message" role="status" aria-live="polite"></p>
    <button class="register-back" type="button">Back to login</button>
  `;
  loginForm.querySelector('[name="username"]').focus();
}

loginForm.addEventListener('click', event => {
  if (event.target.closest('.login-dialog-close')) {
    loginDialog.close();
    return;
  }
  if (event.target.closest('.register-submit')) {
    showRegisterForm();
    return;
  }
  if (event.target.closest('.register-back')) showLoginForm();
});

loginDialog.addEventListener('click', event => {
  if (event.target === loginDialog) loginDialog.close();
});

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const message = loginForm.querySelector('.login-message');
  message.textContent = showingRegister
    ? 'Account registration is not connected yet.'
    : 'OTP login is not connected yet.';
});
