function mode(){
    var element = document.body;
    element.classList.toggle("dark-mode");    
    if(element.hasChildNodes()){
        Array.from(element.children).forEach(child => {
            child.classList.toggle("child-dark-mode");
        });
    }

    
}