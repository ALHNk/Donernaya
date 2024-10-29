window.addEventListener("load", function(){

    let extra = document.getElementById('extra');
    let mob = document.getElementById('mobileSpace');

    if (window.innerWidth < 1400) {
        extra.style.display = 'none';
        mob.style.display = 'block';
    } 
    else{
        mob.style.display = 'none';
    }
});
