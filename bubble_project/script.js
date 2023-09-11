function makeBubble(){
    let balls="";
    for(let i=1;i<=240;i++){
    balls+=`<div class="ball">${Math.floor(Math.random()*10)}</div>`
}
document.querySelector(".pbottom").innerHTML=balls;
}


// Math.floor(Math.random()*10)
let timer=60;
function runTimer(){
    let timerInt=setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#itimer").textContent=timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector(".pbottom").innerHTML=`<h1>GAME OVER!!!<h1>`
        }
    },1000);
}

let rn;
function getNewHit(){
    rn=Math.floor(Math.random()*10);
    document.querySelector("#ihit").textContent=rn;
}
let score1=0;;
function countScore(){
    score1+=10;
    document.querySelector("#marks").textContent=score1;
}
document.querySelector(".pbottom").addEventListener("click",function(dets){
    // console.log(Number(dets.target.textContent));
    let hitNum=Number(dets.target.textContent);
    if(hitNum===rn){
        countScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();
// countScore();
console.log(true==1);