var addFriend=document.querySelector("#add");
var sts=document.querySelector("#status");
var count=0;
addFriend.addEventListener("click",function(){
    
    if(count==0){
        sts.innerHTML="Friends";
        sts.style.color="green";
        addFriend.innerHTML="Remove"
        addFriend.style.color="#111"
        addFriend.style.backgroundColor="#dadada"

        count=1;
    }
    else{
        sts.innerHTML="Stranger";
        sts.style.color="red";
        addFriend.innerHTML="Add Friend"
        addFriend.style.color="#fff"
        addFriend.style.backgroundColor="cadetblue"
        count=0;


    }
})