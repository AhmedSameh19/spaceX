// import highway, { Transition } from '@dogstudio/highway';
// import fade from "./fade.js"
// const H=new Highway.Core({
//         transitions:{
//             default: Fade
//         }
//     });
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
// var id =null;
// elem.style.marginLeft=-90000+'px';
// function myMove() {
//     var elem = document.getElementById("moon");
//     var pos = 0;
//     clearInterval(id);
//     id = setInterval(frame, 20);
//     function frame() {
//       if (pos == 20) {
//         clearInterval(id);
//       } else {
//         pos++;
//         elem.style.marginLeft = pos + 'px';
//       }
//     }
//   }
var z=document.querySelector("#moon");
function rotate(){
    while(true)
    {
        setInterval(function(){
            z.style.WebkitTransitionDuration="1s";
            z.style.webkitTransform = 'rotate(360deg)';
        },100)
    }
}
document.getElementById("moon").addEventListener("click",function(){    
    alert("FUCK YOU MISTER BADAWY 😘");
})
