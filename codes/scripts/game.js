
function guessNumber(){
    const NEW_DISCOUNT = document.getElementById("newDiscount");
    let gameInput = document.getElementById('gameInput').value;
    let gameRandom = Math.floor(Math.random() * 3)+1;
    if(gameInput == gameRandom){
        alert("Congratulations! You won a new discount!");
        NEW_DISCOUNT.style.display = "table-row";
    }
    else{
        alert("Try again");
    }
}
