const textToSpeak = document.getElementById("textToSpeak");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");

const synth = window.speechSynthesis;
let utterance = new SpeechSynthesisUtterance();

// Set the default voice and volume
utterance.voice = synth.getVoices()[0]; // You can choose a different voice if needed
utterance.volume = 1; // Adjust the volume as needed (0 to 1)

// Event listeners
playButton.addEventListener("click", () => {
    if (textToSpeak.value.trim() !== "") {
        utterance.text = textToSpeak.value;
        synth.cancel(); // Stop any ongoing speech
        synth.speak(utterance);
    }
});

pauseButton.addEventListener("click", () => {
    synth.pause();
});

// Resume button (if needed)
resumeButton.addEventListener("click", () => {
    synth.resume();
});

