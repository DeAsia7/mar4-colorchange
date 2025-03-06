import soundfile from "./sound.wav";

export default function changeBackground() {
  const colors = [
    "linear-gradient(to bottom right, purple,pink)",
    "linear-gradient(to bottom right, blue,green)",
    "linear-gradient(to bottom right, green,black)",
    "linear-gradient(to bottom right, yellow,red)",
    "linear-gradient(to bottom right, orange,blue)",
  ];

  document.body.style.background =
    colors[Math.floor(Math.random() * colors.length)];

  //<body style="background-color: #">

  playSound();
}

function playSound() {
  const sound = new Audio(soundfile);
  sound.play();
}
