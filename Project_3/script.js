window.addEventListener("mousemove",function(details){
    var move=document.querySelector("#rect")
    // // move.style.left=details.clientX+"px"
    // // console.log(details.clientX+"px")
    // // console.log(details.clientX);
    var valuex=gsap.utils.mapRange(0,window.innerWidth,100+move.getBoundingClientRect().width/2,window.innerWidth-(100+move.getBoundingClientRect().width/2),details.clientX
    );
    gsap.to('#rect',{
        left:valuex + "px",
        ease: Power3,
    })
})