const textToSpeak = document.getElementById("textToSpeak");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");

const synth = window.speechSynthesis;
let utterance = new SpeechSynthesisUtterance();


utterance.voice = synth.getVoices()[0]; 
utterance.volume = 1; 


playButton.addEventListener("click", () => {
    if (textToSpeak.value.trim() !== "") {
        utterance.text = textToSpeak.value;
        synth.cancel(); 
        synth.speak(utterance);
    }
});

pauseButton.addEventListener("click", () => {
    synth.pause();
});



