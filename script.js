document.getElementById('showLogin').addEventListener('click', function () {
  document.getElementById('loginForm').style.display = 'flex';
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('forgotPasswordForm').style.display = 'none';
});

document.getElementById('showSignup').addEventListener('click', function () {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'flex';
  document.getElementById('forgotPasswordForm').style.display = 'none';
});

document.getElementById('forgotPassword').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('forgotPasswordForm').style.display = 'flex';
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  // Add login functionality and validation here
  console.log('Login submitted');
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  // Add signup functionality and validation here
  console.log('Signup submitted');
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function (e) {
  e.preventDefault();
  // Add forgot password functionality here
  console.log('Forgot Password submitted');
});

document.getElementById('toggleLoginPassword').addEventListener('click', function () {
  togglePasswordVisibility('loginPassword');
});

document.getElementById('toggleSignupPassword').addEventListener('click', function () {
  togglePasswordVisibility('signupPassword');
});

document.getElementById('toggleNewPassword').addEventListener('click', function () {
  togglePasswordVisibility('newPassword');
});

function togglePasswordVisibility(passwordId) {
  const passwordInput = document.getElementById(passwordId);
  const passwordToggle = document.getElementById(`toggle${passwordId.charAt(0).toUpperCase() + passwordId.slice(1)}`);
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordToggle.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    passwordToggle.textContent = 'Show';
  }
}
