var con=document.querySelector(".card");
var like=document.querySelector("i");
con.addEventListener("dblclick",function(){
    like.style.transform="translate(-50%,-50%) scale(3)"
    like.style.color="red";
    like.style.transition="transform ease .3s";
    like.style.opacity=1;
    setTimeout(function(){
        like.style.transform="translate(-50%,-50%) scale(0)";
        // like.style.transition="transform ease 0s";
        like.style.opacity=0;
    },1000)
})