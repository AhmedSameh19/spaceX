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
console.log()
var path = window. location. pathname;
var page = path. split("/"). pop();
console. log( page.charAt(4));
function turned(){
    if(page.charAt(4)==1){
        document.getElementById("one").style.backgroundColor="white";
        document.getElementById("aloo").style.marginLeft = "20px";

    }
    if(page.charAt(4)==2){
        document.getElementById("two").style.backgroundColor="white";
    }
    if(page.charAt(4)==3){
        document.getElementById("three").style.backgroundColor="white";
    }
    if(page.charAt(4)==4){
        document.getElementById("four").style.backgroundColor="white";
    }
}
// {
//     document.getElementById("crew").style.color="black";
// }



