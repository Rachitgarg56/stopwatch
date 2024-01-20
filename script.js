const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

let sec = 0;
let min = 0;
let hr = 0;
let addSec;

function handleStart () {

    addSec = setInterval(() => {
        
        if (sec == 59) {
            sec = 0;
            second.innerText =  '00';

            if (min == 59) {
                min = 0;
                minute.innerText = 0;
                hr += 1;
                if (String(hr).length < 2) {
                    hour.innerText = '0' + hr;
                } else {
                    hour.innerText = hr;
                }
            } else {
                min += 1;
                if (String(min).length < 2) {
                    minute.innerText = '0' + min;
                } else {
                    minute.innerText = min;
                }
            }

        } else {
            sec += 1;
            if (String(sec).length < 2) {
                second.innerText = '0' + sec;
            } else {
                second.innerText = sec;
            }
        }

    },1000);  
};

function handleStop () {
    clearInterval(addSec);
};

function handleReset () {
    sec = 0;
    min = 0;
    hr = 0;

    second.innerText = '00';
    minute.innerText = '00';
    hour.innerText = '00';

    clearInterval(addSec);
    
};

startBtn.addEventListener('click', handleStart);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
