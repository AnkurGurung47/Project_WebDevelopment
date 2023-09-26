var main=document.querySelector(".main");
var follower=document.querySelector(".cursor");
main.addEventListener("mousemove",function(dets){
    
    // follower.style.position="absolute";
    follower.style.left=dets.x+"px";
    follower.style.top=dets.y+"px";
})