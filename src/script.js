import soundfile from './sound.wav';

export default function changeBackground(){

    const gradients = [
'linear-gradient(to right, #f9d423, #ff4e50)',

    ]
}

document.body.style.background = gradients[Math.floor(Math.random() * gradients)]



const sound = new Audio(soundfile);
sound.play();