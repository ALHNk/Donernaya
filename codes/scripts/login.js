function loginFunction() {
    var emailInput = document.getElementById('emailInput');
    var passwordInput = document.getElementById('passwordInput');
  
    // Retrieve stored values from localStorage
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
  
    // Check if the entered email matches the stored email
    if (emailInput.value === storedEmail) {
      // Check if the entered password matches the stored password
      if (passwordInput.value === storedPassword) {
        alert("Login successful!");
        localStorage.setItem('userInfo', JSON.stringify({ email: emailInput.value, password: 'HAHA, mechtai mechtai >:))', username: localStorage.getItem('firstName') }));

        // Optionally redirect to another page, e.g., user dashboard
        window.location.href = "index.html";
      } else {
        alert("Incorrect password. Please try again.");
      }
    } else {
      alert("User does not exist. Please register.");
    }
  
    return false; // Prevent default form submission
  }
  
  function logout() {
    localStorage.removeItem('userInfo');
    window.location.href = "profile.html";

  }
  // Add event listener for form submission
  window.onload = function() {
    var form = document.getElementById('loginForm');
    form.onsubmit = loginFunction; // Bind the login function to the form's submit event
  };
  
