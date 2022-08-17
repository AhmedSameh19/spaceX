document.getElementById("ham").addEventListener("click",function(){
    
    document.getElementById("ham").style.display="none";
    document.getElementById("back").style.display="flex";
    document.getElementById("list").style.display="flex";
    document.getElementById("close").style.display="block";


    
})
document.getElementById("close").addEventListener("click",function(){
    document.getElementById("ham").style.display="block";
    document.getElementById("back").style.display="none";
    document.getElementById("list").style.display="none";
    document.getElementById("close").style.display="none";
})
