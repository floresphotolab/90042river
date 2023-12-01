// Password validation function
function checkPassword(event) {
  event.preventDefault();
  const passwordInput = document.getElementById('password-input');
  const password = passwordInput.value;

  
  // Replace 'password123' with your desired password
  if (password === 'Jesse&Maria') {
    showGallerySection();
  } else {
    showPasswordError();
  }
  
  // Clear the password input field
  passwordInput.value = '';
}

// Function to show the gallery section and hide the password section
function showGallerySection() {
  const passwordSection = document.getElementById('password-section');
  const gallerySection = document.getElementById('gallery-section');
  
  passwordSection.classList.add('hidden');
  gallerySection.classList.remove('hidden');
}

// Function to show the password error message
function showPasswordError() {
  const passwordError = document.getElementById('password-error');
  passwordError.classList.remove('hidden');
}
