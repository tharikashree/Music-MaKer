window.addEventListener('load',()=>{
    const pads=document.querySelectorAll('.pads div');
    const sound=document.querySelectorAll('.sound');
    const visual=document.querySelector('.visual');
    const colors = ["brown", "yellow", "lightskyblue", "green", "crimson","hotpink"];


    console.log(sound);
    pads.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
            sound[index].currentTime=0;
            sound[index].play();
            createBubbles(index);
        });
        
    });
    const createBubbles=(index)=>{
        const bubble=document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation='jump 1s ease';
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        });

    }
});