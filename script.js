// Function to validate the contact form
function validateForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
      alert('Please fill in all required fields.');
      return false; // Prevent form submission
    }
    
    return true; // Allow form submission
  }
  