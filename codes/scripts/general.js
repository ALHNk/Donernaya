//function on page loaded to set theme (We call it mode) to what user set it
window.addEventListener('load', () =>{
  if(localStorage.getItem("mode") === "dark"){
     mode();
  }
 
});

//function changes theme of the page 
function mode(){
    var element = document.body;
    element.classList.toggle("dark-mode"); 
    if(element.classList.contains("dark-mode")){
      document.getElementById("mode_btn").querySelector("img").setAttribute("src", "images/light_mode.png");
      localStorage.setItem("mode", "dark"); // storing locally changed values of the theme if it is dark
    }   
    else {
      document.getElementById("mode_btn").querySelector("img").setAttribute("src", "images/dark_mode.png");
      localStorage.setItem("mode", "light"); // storing locally changed values of the theme if it is light
    }
    //if body of our page has cjildren elements such as DIVs, we will change children's background colour to different colour than body's
    if(element.hasChildNodes()){
        Array.from(element.children).forEach(child => {
            child.classList.toggle("child-dark-mode");
        });
    }    
}

function anima(){
  const button = document.querySelector(".animated-button");    
  button.classList.add("pressed");
    
    // Удаление класса после завершения анимации
    setTimeout(() => {
      button.style.backgroundColor = "#A155B9";
      button.classList.remove("pressed");
  }, 1500);
}


// button.addEventListener("click", () => {
    
// });


//Event Listener for keys from keyboard
document.addEventListener('DOMContentLoaded', function(){
  let isMenuOpen = false;
  document.addEventListener('keydown', function(event) {
    
    switch(event.key){
      case 'Escape' :        
        let menu = document.getElementsByClassName("offcanvas")[0];
        let bootstrapOffcanvas = new bootstrap.Offcanvas(menu);
        
        if(!isMenuOpen){                                            //show the bootstrap offcanvas menu if it is hided
          bootstrapOffcanvas.show();
          menu.setAttribute('data-bs-togle', 'offcanvas');
          isMenuOpen = true;
        }
        else{
          //bootstrapOffcanvas.hide();
          isMenuOpen = false;
        }

          break;  
        break;
      case 'Control':
        mode();
        break;
      default:
      break;
    }
    
  });
});

//Function to show time in 24 hours method
function updateDateTime() {
    const now = new Date();
    const time = {
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric',
      hour12: false
    };
    document.getElementById('datetime').textContent = now.toLocaleString('kz', time);
  }

  // Update the time every second
  setInterval(updateDateTime, 1000);

  
  //special countdown till next Diuscount
  function startCountdown(targetDate) {
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        document.getElementById('countdown').textContent = "NOOOOOOOW!!!!!";
        clearInterval(intervalId);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('countdown').textContent = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    const intervalId = setInterval(updateCountdown, 1000);
    updateCountdown(); // Run immediately on load
  }

  const targetDate = new Date('november 12, 2024 12:06:00').getTime();
  startCountdown(targetDate);

  //function to show and hide some divs
  function appear(targetId){
    let targetObj = document.getElementById(targetId);
    if(targetObj.style.display === "none"){
      targetObj.style.display = "block";
    }
    else{
      targetObj.style.display = "none";
    }
  }

