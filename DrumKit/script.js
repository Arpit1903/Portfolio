function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const btn = document.querySelector(`.btn[data-key="${e.keyCode}"]`);
    if(!audio){
        return;
    }
    
    audio.currentTime = 0;
    audio.play();
    btn.classList.add('playing');
}


function removeTransition(e){
    if(e.propertyName !== 'transform'){
        return;
    }
    this.classList.remove('playing');
}

const btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);