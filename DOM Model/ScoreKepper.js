var p1 =document.querySelector("#p1");
var p2 =document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1Disp = document.querySelector("#p1Disp");
var p2Disp = document.querySelector("#p2Disp");
var scoreLimit =document.querySelector("#scoreLimit");
var gameOver = false;
var numInput = document.querySelector("input");

p1score =0;
p2score =0;


p1.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
        p1Disp.textContent= p1score;
        if(p1Disp.textContent>= scoreLimit.textContent){
            gameOver = true;
            p1Disp.classList.add("green");
        }
    }
})

p2.addEventListener("click", function(){
    if(!gameOver){
    p2score++;
    p2Disp.textContent = p2score;
    if(p2Disp.textContent >= scoreLimit.textContent){
        gameOver =true;
        p2Disp.classList.add("green");
    }
    }
})

reset.addEventListener("click", function(){
   reset1();
})

function reset1(){
     p1score=0;
    p2score=0;
    p1Disp.textContent= 0;
    p2Disp.textContent= 0;
    p1Disp.classList.remove("green");
    p2Disp.classList.remove("green");
    gameOver =false;
}


numInput.addEventListener("change", function(){
    scoreLimit.textContent = numInput.value;
    reset1();
})