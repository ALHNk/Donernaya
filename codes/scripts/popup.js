let checkContainer = document.getElementById('after-form-check');
checkContainer.style.display = 'none';

function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
}

function greet(email, callback){
    document.getElementById('pop-up-name').innerText = `Welcome!, ${email}`;
    callback();
}
function greetAndCheck(){
    document.getElementById('form-con').style.display = 'none';
    checkContainer.style.display = 'block';
    document.getElementById('pop-up-name').innerText = `is it you?`;
}

function popUpSubmit(){
    
    let emailInput = document.getElementsByClassName('form-input')[0].value;
    if(emailInput != null)
    {        
        greet(emailInput, greetAndCheck);
    }
}

