import highway from '@dogstudio/highway';
 import tween from 'gsap';

 class fade extends highway.Transition{
    in(from , to ,done){
        from.remove();
        tween.fromTo(to,0.5,{opacity:0},{opacity:1 , onComplete:done})

    }
    out(from , done ){
        tween.fromTo(to,0.5,{opacity:1},{opacity:0 , onComplete:done})
    }
 }

 export default fade;