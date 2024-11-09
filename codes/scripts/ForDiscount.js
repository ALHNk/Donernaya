//special function for game which creates random number and checks if user guess it
function guessNumber(){
    let gameInput = document.getElementById('gameInput').value;
    let gameRandom = Math.floor(Math.random() * 3)+1;
    if(gameInput == gameRandom){
        alert("Congratulations! You won a new discount!");
        winDiscount();
    }
    else{
        alert("Try again");
    }
}

// function gives new discount
function winDiscount(){
    const NEW_DISCOUNT = document.getElementById("newDiscount");
    NEW_DISCOUNT.style.display = "table-row";
}


//function to fillter discounts by restaurant
let allDiscountRows = document.getElementsByClassName('discountRows');
function filterRestaurant(selector) {
    let selectedElement = selector.value;

    localStorage.setItem('selectedRestaurant', selectedElement);
    
    if (selectedElement === "All") {
        Array.from(allDiscountRows).forEach(discountRow => {
            discountRow.style.display = 'table-row';
        });
    } else {
        Array.from(allDiscountRows).forEach(discountRow => {
            discountRow.style.display = 'table-row';
            let restaurantName = discountRow.querySelector('#restaurantName');
            console.log(restaurantName.innerText, selectedElement);
            if (restaurantName.innerText === selectedElement) {
                discountRow.style.display = 'table-row';
            } else {
                discountRow.style.display = 'none';
            }
        });
    }
}


function onOrdersSubmitted(){
    let arrayOfOrders = [];
    if(localStorage.getItem('userInfo') === null){
        alert('please sign in');
        return;
    }
    Array.from(allDiscountRows).forEach(discountRow =>{
        const checkbox = discountRow.querySelector('.form-check-input');
        if (checkbox && checkbox.checked) {
            alert("hi")
            arrayOfOrders.push("<tr>" + discountRow.innerHTML + "</tr>");
        }
    });

    localStorage.setItem('arrayOfOrders', JSON.stringify(arrayOfOrders));
}

window.onload = function() {
    const savedFilter = localStorage.getItem('selectedRestaurant');
    if (savedFilter) {
        document.getElementById('resSel').value = savedFilter;
        filterRestaurant(document.getElementById('resSel'));
    }
};
