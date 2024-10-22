function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
    document.getElementById('after-form-check').style.display = 'none';
}

function greet(email, callback){
    document.getElementById('pop-up-name').innerText = `Welcome!, ${email}`;
    callback();
}
function greetAndCheck(){
    document.getElementById('form-con').style.display = 'none';
    
    document.getElementById('pop-up-name').innerText += `\n is it you?`;
    document.getElementById('after-form-check').style.display = 'block';
   
}

function popUpSubmit(){
    
    let emailInput = document.getElementsByClassName('form-input')[0].value;
    if(emailInput != null && emailInput.includes('@'))
    {        
        greet(emailInput, greetAndCheck);
    }
    else {
        alert('please enter valid email');
    }
}

