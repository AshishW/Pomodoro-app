const bells = new Audio('./sounds/bell.wav');
const startBtn = document.querySelector('.btn-start');
const session = document.querySelector('.minutes');
const moodPlayer = document.querySelector('#mood-audioplayer');
const moodContainer = document.querySelector('.mood-ctrl-container')
let myInterval;
let backgroundInterval;
let state = true;


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


        myInterval = setInterval(updateSeconds, 1000);

    }else{
        alert('Session has already Started');
    }
}



function moodPlayerHandler(e){
    const button = e.target;
    const soundFile = button.getAttribute('data-sound');
    const buttonText = button.textContent;
    const appHTML = document.querySelector('html')
    switch (buttonText){
        case "🌦️":
            appHTML.style.backgroundImage = "linear-gradient(to right, #4e54c8, #8f94fb)"
            break;
        case "🔥":
            appHTML.style.backgroundImage = "linear-gradient(to right,rgb(183, 102, 64),rgb(209, 147, 102))"
            break;
        case "🌊":
            appHTML.style.backgroundImage = "linear-gradient(to right,rgb(78, 147, 200),rgb(143, 211, 251))"
    }
    if (soundFile) {
      moodPlayer.src = soundFile; 
      moodPlayer.play();          
    }
}

startBtn.addEventListener("click", appTimer);

moodContainer.addEventListener("click", moodPlayerHandler);