// Function to toggle password visibility
document.querySelectorAll('.toggle-password').forEach((eyeIcon) => {
  eyeIcon.addEventListener('click', function () {
    const target = document.getElementById(this.getAttribute('data-target'));
    const type = target.type === 'password' ? 'text' : 'password';
    target.type = type;
  });
});

// Submit form and show modal if passwords match
document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const errorMessage = document.getElementById('error-message');
  const modal = document.getElementById('successModal');

  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match. Please enter matching passwords.";
    return; // Stop processing if passwords do not match
  }

  // Clear error message and show modal if passwords match
  errorMessage.textContent = '';
  modal.style.display = 'flex';
});

// Hide the success modal when clicking the close button
document.getElementById('closeModal').addEventListener('click', function () {
  const modal = document.getElementById('successModal');
  modal.style.display = 'none';
});
