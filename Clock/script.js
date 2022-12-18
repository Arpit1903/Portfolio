const secondsHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    
    const sec = now.getSeconds();
    const secInDeg = ((sec / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secInDeg}deg)`;
    
    const min = now.getMinutes();
    const minInDeg = ((min / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minInDeg}deg)`;

    const hour = now.getHours();
    const hourInDeg = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourInDeg}deg)`;
}

setInterval(setDate, 1000);