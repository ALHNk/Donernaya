function loginFunction() {
    var emailInput = document.getElementById('emailInput');
    var passwordInput = document.getElementById('passwordInput');  
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
  
    if (emailInput.value === storedEmail) {
      if (passwordInput.value === storedPassword) {
        alert("Login successful!");
        localStorage.setItem('userInfo', JSON.stringify({ email: emailInput.value, password: 'HAHA, mechtai mechtai >:))', username: localStorage.getItem('firstName') }));

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
  
