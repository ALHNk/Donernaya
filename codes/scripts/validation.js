
//main function to validatecheck email and password for correctness
function mainFunction() {
  var form = document.getElementById('myForm');
  var passid = document.getElementById('passid');
  var sobakaid = document.getElementById('sobakaid');

 
  if (passid_validation(passid, 7, 12)) {
      return false; 
  }

 
  if (sobakaid_validol(sobakaid)) {
      return false; 
  }

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
      alert("Username needs to contain '@'. or mail.ru"); 
      return true; 
  }
  return false; 
}
window.onload = function() {
  let train = document.getElementById('train'); 
  train.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      train.style.left = timePassed / 20 + 'px';

      if (timePassed > 25000) clearInterval(timer);

    }, 20);
  }
};