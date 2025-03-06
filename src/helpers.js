import soundfile from './sound.wav';

export default function changeBackground(){
    const gradients = [
       'linear-gradient(top left to bottom right, purple)',
         'linear-gradient(top left to bottom right, blue)',
            'linear-gradient(top left to bottom right, green)',
            'linear-gradient(top left to bottom right, yellow)',

    ];

    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//<body style="background-color: #">

playSound();
}

function playSound(){
    const sound = new Audio(soundfile);
    sound.play();
    
}

