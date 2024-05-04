const voicesDropdown = document.querySelector("#voices_select");
const rateInput = document.querySelector("#rate_bar");
const pitchInput = document.querySelector("#pitch_bar");
const text = document.querySelector("#text");
const stopButton = document.querySelector("#stop_button");
const speakButton = document.querySelector("#speak_button");

message = new SpeechSynthesisUtterance(text.value);
let voices_select = [];

function populateVoices() {
    voices_select = speechSynthesis.getVoices();
    for (let index = 0; index < voices_select.length; index++) {
        const option = document.createElement("option");
        option.setAttribute("value", voices_select[index].name);
        option.textContent = voices_select[index].name;
        voicesDropdown.appendChild(option);
    }
}

function setVoice() {
    for (let index = 0; index < voices_select.length; index++) {
        if (voices_select[index].name === voicesDropdown.value) {
            message.voice = voices_select[index];
        }
    }
}

function setRate() {
    message.rate = rateInput.value;
}

function setPitch() {
    message.pitchInput = pitchInput.value;
}

function setText() {
    message.text = text.value;
}

function stopVoice() {
    speechSynthesis.cancel();
}

function speakVoice() {
    speechSynthesis.speak(message);
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
rateInput.addEventListener("change", setRate);
pitchInput.addEventListener("change", setPitch);
text.addEventListener("change", setText);
stopButton.addEventListener("click", stopVoice);
speakButton.addEventListener("click", speakVoice);