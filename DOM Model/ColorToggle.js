var button= document.querySelector("button");
// isPurple= false;

button.addEventListener("click", function(){

    
    // if(isPurple){
    // document.body.style.background ="white";
    // isPurple =false;
    // }
    // else{
    // document.body.style.background ="purple";
    // isPurple =true;
    // }

    document.body.classList.toggle("purple");
})
