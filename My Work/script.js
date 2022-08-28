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
//console.log(path)
var page = path. split("/"). pop();
console. log( typeof(parseInt((page.charAt(4)))));
function turned(){
    if(page.charAt(4)==1 || page.charAt(10)==1){
        if(page.charAt(4)==="1"){
            document.getElementById("one").style.backgroundColor="white";

        }
        else{
            document.getElementById("oneD").style.backgroundColor="white";
            document.getElementById("link1").style.color="black";
        }
        

    }
    if(page.charAt(4)==2 || page.charAt(10)==2){
        if(page.charAt(4)==="2"){
            document.getElementById("two").style.backgroundColor="white";
        }
        else{
            document.getElementById("twoD").style.backgroundColor="white";
            document.getElementById("link2").style.color="black";
        }
        
    }
    if(page.charAt(4)==3 || page.charAt(10)==3){
        if(page.charAt(4)==="3"){
            document.getElementById("three").style.backgroundColor="white";
        }
        else{
            document.getElementById("threeD").style.backgroundColor="white";
            document.getElementById("link3").style.color="black";
        }
        
    }
    if(page.charAt(4)==4){
        document.getElementById("four").style.backgroundColor="white";
        // document.getElementById("aloo").style.right="110px"
    }
}
// {
//     document.getElementById("crew").style.color="black";

var startingX , movingX
function touchstart(event){
    startingX=event.touches[0].clientX;
}
function touchmove(event){
    movingX=event.touches[0].clientX;

}
function touchend(){
    if (startingX+100<movingX){//left
        if(page.charAt(4)==1)

        window.location="../my htmls/crew4.html"
        else{
            var x=page.charAt(4)-1;
            window.location=`../my htmls/crew${x}.html`;
        }
    }
    else if(startingX-100>movingX){//right
        if(page.charAt(4)==4){
            window.location="../my htmls/crew1.html"
        }
        else{
            var y=1+parseInt(page.charAt(4));
            
            window.location=`../my htmls/crew${y}.html`  
        }
          }
          
}
function technologyMotion(){
    if (startingX+100<movingX){//left
        if(page.charAt(10)==1)

        window.location="../my htmls/technology3.html"
        else{
            var x=page.charAt(10)-1;
            window.location=`../my htmls/technology${x}.html`;
        }
    }
    else if(startingX-100>movingX){//right
        if(page.charAt(10)==3){
            window.location="../my htmls/technology1.html"
        }
        else{
            var y=1+parseInt(page.charAt(10));
            
            window.location=`../my htmls/technology${y}.html`  
        }
          }
}

                           
