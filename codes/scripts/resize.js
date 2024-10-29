

window.addEventListener("load", function(){
    let houseImg = document.getElementById('houseImg');
    let menuImg = document.getElementById('menuImg');

    if (window.innerWidth < 1200) {
                                        // Set image si ze for mobile
        houseImg.setAttribute("width", "100px"); // Fixed desktop size
        houseImg.setAttribute("height", "75px");
        menuImg.setAttribute("width", "100px");
        menuImg.setAttribute("height", "75px");
    } else {
      // Set image size for desktop
      houseImg.setAttribute("width", "700");  
      houseImg.setAttribute("height", "500px");
      menuImg.setAttribute("width", "700");
      menuImg.setAttribute("height", "500px");
    }

});
