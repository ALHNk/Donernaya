
//main function to validatecheck email and password for correctness

function mainFunction() {
  var form = document.getElementById('myForm');
  var firstName = form.querySelector('#validationDefault01').value; // Get the first name value
  var passid = document.getElementById('passid');
  var sobakaid = document.getElementById('sobakaid');

  // Validate password length
  if (passid_validation(passid, 7, 12)) {
    return false; 
  }

  // Validate email format
  if (sobakaid_validol(sobakaid)) {
    return false; 
  }

  // Store information in localStorage
   localStorage.setItem('firstName', firstName);
  localStorage.setItem('password', passid.value);
  localStorage.setItem('email', sobakaid.value);
  

  // Redirect to login page
  window.location.href = "login.html";
  return false; 
}

function passid_validation(passid, minLength, maxLength) {
  if (passid.value.length < minLength || passid.value.length > maxLength) {
    alert("Password length must be between " + minLength + " and " + maxLength + " characters.");
    return true; 
  }
  return false; 
}

function sobakaid_validol(sobakaid) {
  if (!sobakaid.value.includes('@mail.ru')) {
    alert("Email needs to contain '@' or 'mail.ru'"); 
    return true; 
  }
  return false; 
}

// window.onload = function() {
//   let train = document.getElementById('train'); // Make sure you select the element
//   train.onclick = function() {
//     let start = Date.now();
//     let timer = setInterval(function() {
//       let timePassed = Date.now() - start;
//       train.style.left = timePassed / 20 + 'px';
//       if (timePassed > 25000) clearInterval(timer);
//     }, 20);
//   }
// };
