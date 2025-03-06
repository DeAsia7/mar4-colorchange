{
document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//<body style="background-color: #">

playSound();
}

function playSound(){
    const sound = new Audio(soundfile);
    sound.play();
    
}
