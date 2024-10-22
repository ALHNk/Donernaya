function mode(){
    var element = document.body;
    element.classList.toggle("dark-mode");    
    if(element.hasChildNodes()){
        Array.from(element.children).forEach(child => {
            child.classList.toggle("child-dark-mode");
        });
    }

    
}

document.addEventListener('DOMContentLoaded', function(){
  let isMenuOpen = false;
  document.addEventListener('keydown', function(event) {
    
    switch(event.key){
      case 'Shift' :        
        let menu = document.getElementsByClassName("offcanvas")[0];
        let bootstrapOffcanvas = new bootstrap.Offcanvas(menu);
        if(!isMenuOpen){
          bootstrapOffcanvas.show();
          menu.setAttribute('data-bs-togle', 'offcanvas');
          isMenuOpen = true;
        }
        else{          
          bootstrapOffcanvas.hide();
          menu.setAttribute('data-bs-dismiss', 'offcanvas');
          isMenuOpen = false;
        }        
        break;
     
      default:
      break;
    }
    
  });
});


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
//   updateDateTime(); // Call immediately to display on load

  
  function startCountdown(targetDate) {
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        document.getElementById('countdown').textContent = "it was a joke we don't have another discounts";
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

  const targetDate = new Date('november 1, 2024 23:59:59').getTime();
  startCountdown(targetDate);

  function appear(targetId){
    let targetObj = document.getElementById(targetId);
    if(targetObj.style.display === "none"){
      targetObj.style.display = "block";
    }
    else{
      targetObj.style.display = "none";
    }
  }

