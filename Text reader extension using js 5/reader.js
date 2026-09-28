const speakBtn = document.getElementById('speakBtn');
const textInput = document.getElementById('textInput');

const volumeInput = document.getElementById('volume');
const pitchInput = document.getElementById('pitch');
const rateInput = document.getElementById('rate');

const stopBtn = document.getElementById('stopBtn');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');

let speech;
let voices = [];

// Load voices
speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices();
};

// Start speech
speakBtn.addEventListener('click', () => {

    speechSynthesis.cancel();

    speech = new SpeechSynthesisUtterance(textInput.value);

    speech.volume = parseFloat(volumeInput.value);
    speech.pitch = parseFloat(pitchInput.value);
    speech.rate = parseFloat(rateInput.value);

    speech.voice = voices.find(v =>
        v.name.includes("Google US English")
    );

    speechSynthesis.speak(speech);

});

// Stop audio
stopBtn.addEventListener('click', () => {

    speechSynthesis.cancel();

});

// Resume audio
playBtn.addEventListener('click', () => {

    speechSynthesis.resume();

});

// Pause audio
pauseBtn.addEventListener('click', () => {

    speechSynthesis.pause();

});