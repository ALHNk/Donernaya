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
    let arrayOfOrders = JSON.parse(localStorage.getItem('arrayOfOrders')) || [];
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

let allCurrency = ""; 

async function getDataFromCurrencyAPI(){

    const savedData = localStorage.getItem("currencyData");
    const today = new Date().toISOString().split('T')[0];
    if (savedData) {
        const parsedData = JSON.parse(savedData);
    
        // Проверяем, совпадает ли дата в сохранённых данных с сегодняшней датой
        if (parsedData.date === today) {
          allCurrency = parsedData.rates;
          
          return; 
        }
      }

   await fetch('https://v6.exchangerate-api.com/v6/3480dc6ad3b51e64a1497529/latest/USD')
  .then(response => response.json())
  .then(data =>{
    allCurrency = data.conversion_rates;
    localStorage.setItem("currencyData", JSON.stringify({ rates: allCurrency, date: today }));
  })
  .catch(error => console.error('Ошибка:', error));
    
}
let currentCurrency = "KZT";
document.addEventListener("DOMContentLoaded", function() {
    let priceInput = document.querySelector("#priceInput");
    
    if (priceInput) {
        priceInput.addEventListener('change', (event) => {
            event.target.value = event.target.value.toUpperCase();
            if(!(event.target.value in allCurrency)){
                return; 
            }
            changeCurrency(event.target.value);
        });
    } 
});

function changeCurrency(currency){
    Array.from(allDiscountRows).forEach(discountRow =>{
        let value = discountRow.querySelector("#value");
        let convertedValue = parseFloat(value.innerText) / allCurrency[currentCurrency] * allCurrency[currency];
        value.innerText = convertedValue.toFixed(2);
        
    });
    currentCurrency = currency;
}

window.onload = function() {
    getDataFromCurrencyAPI();
    const savedFilter = localStorage.getItem('selectedRestaurant');
    if (savedFilter) {
        document.getElementById('resSel').value = savedFilter;
        filterRestaurant(document.getElementById('resSel'));
    }
   
};
