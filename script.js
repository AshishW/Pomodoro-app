const bells = new Audio('./sounds/bell.wav');
const startBtn = document.querySelector('.btn-start');
const session = document.querySelector('.minutes');
let myInterval;
let backgroundInterval;
let state = true;
const gradients = [
'linear-gradient(to right, #4e54c8, #8f94fb)',
'linear-gradient(to right, #667eea, #764ba2)',
'linear-gradient(to right,rgb(255, 142, 161), #ff7eb3)',
'linear-gradient(to right, #43cea2, #185a9d)',
'linear-gradient(to right, #ff9966,rgb(72, 39, 40))',
'linear-gradient(to right, #56ccf2, #2f80ed)',
'linear-gradient(to right, #00c6ff, #0072ff)',
'linear-gradient(to right, #f7971e, #ffd200)',
'linear-gradient(to right, #00b09b, #96c93d)',
'linear-gradient(to right,rgb(255, 143, 112), #f7b733)'
];


const appTimer = () =>{
    const sessionAmount = Number.parseInt(session.textContent);

    if(state){
        state = false;
        let totalSeconds = sessionAmount * 60;

        const updateSeconds = () =>{
            const minuteDiv = document.querySelector('.minutes');
            const secondDiv = document.querySelector('.seconds');

            totalSeconds--;
            let minutesLeft = Math.floor(totalSeconds/60);
            let secondsLeft = totalSeconds % 60;

            if(secondsLeft < 10){
                secondDiv.textContent = '0' + secondsLeft;
            }else{
                secondDiv.textContent = secondsLeft;
            }
            minuteDiv.textContent = `${minutesLeft}`;

            if(minutesLeft === 0 && secondsLeft === 0){
                bells.play()
                clearInterval(myInterval);
                clearInterval(backgroundInterval);
            }
        }

        function changeBackground(){
            const appHTML = document.querySelector('html');
            appHTML.style.backgroundImage = gradients[Math.floor(Math.random()*gradients.length)];
        }
        myInterval = setInterval(updateSeconds, 1000);
        backgroundInterval = setInterval(changeBackground, 60000);

    }else{
        alert('Session has already Started');
    }
}


startBtn.addEventListener("click", appTimer);