// Get Dom elements
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startBtn');
const resetButton = document.getElementById('resetBtn');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

//Initialize variables
let timer;
let totalSeconds = 0;

//Function to start timer
function startTimer() {
    if (totalSeconds <= 0) {
        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    }
    if (totalSeconds > 0) {
        timer = setInterval(updateTimer,1000);
        startButton.disabled = true; // Disable start button while timer is running
    }
}

//Function to update timer
function updateTimer(){
    totalSeconds--;
    if (totalSeconds < 0) {
        clearInterval(timer);
        timerDisplay.innerText = '00:00:00';
        startButton.disabled = false; // Enable start button after timer finishes
        return;
    }
    //Calculate hours,minutes, and seconds
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    //Display hours,minutes, and seconds
    timerDisplay.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
//Function to resetTimer
function resetTimer() {
    clearInterval(timer);
    totalSeconds = 0;
    timerDisplay.innerText = '00:00:00';
    startButton.disabled = false; // Enable start button after timer finishes
    //Clear hours,minutes, and seconds
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
}

function pad(num) {
    return num.toString().padStart(2, '0');
}
//Event listeners
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);