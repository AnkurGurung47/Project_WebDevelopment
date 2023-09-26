var rect=document.querySelector(".cursor");
rect.addEventListener("mousemove",function(details){
    var rectanglelocation=rect.getBoundingClientRect()
    var actuallocation=details.clientX-rectanglelocation.left
    if(actuallocation<rectanglelocation.width/2){
        var redcolor=gsap.utils.mapRange(0,rectanglelocation.width/2,255,0,actuallocation);
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power4,
        })
    }
    else{
        var bluecolor=gsap.utils.mapRange(rectanglelocation.width/2,rectanglelocation.width,0,255,actuallocation);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease:Power4,
        })
    
    }

});
rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:`transparent`,
        // ease:Power4,
    })
})