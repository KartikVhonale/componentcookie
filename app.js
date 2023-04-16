const t1= gsap.timeline({defaults:{duration:0.75,ease:"power1.out"}})

t1.fromTo('.cookie',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:1.45});
t1.fromTo('.cookieim',{opacity:0,x:-50,rotation:'-50deg'},{opacity:1,x:0,rotation:'0deg'},'<50%');
t1.fromTo('.text',{opacity:0,x:30},{opacity:1,x:0},'<');

const button=document.querySelector('button');

button.addEventListener('click',()=>{
    t1.fromTo('button',{scale:1.3},{scale:1});
    t1.to('.cookie',{opacity:0,y:100,duration:0.75,ease:'power.out'})
})