import { Timeline } from "gsap/gsap-core"

const img= document.getElementById("moon")
var t1=new Timeline();
t1.fromTo(img,1,{y:"-100%"},{y:"0%", ease:"power3.inOut"})