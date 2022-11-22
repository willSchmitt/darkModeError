const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAddTime = document.querySelector('.addTime')
const buttonLowerTime = document.querySelector('.lowerTime')

const secondsDisplay = document.querySelector('.seconds')
const minutesDisplay = document.querySelector('.minutes')

const soundForest = document.querySelector('.forestCard')
const soundRain = document.querySelector('.rainCard')
const soundCoffe = document.querySelector('.coffeCard')
const soundFireplace = document.querySelector('.fireplaceCard')

const audioForestCard = new Audio('Floresta.wav')
const audioRainCard = new Audio('Chuva.wav')
const audioCoffeCard = new Audio('Cafeteria.wav')
const audioFireplaceCard = new Audio('Lareira.wav')

let stopTimeOut 
let interval;
let isPaused = false;
let initialTimer = 1500;
let currentTime = initialTimer;

// #################################################################

soundForest.addEventListener('click',() => {
  if(audioForestCard.paused){
    audioForestCard.play()   
  }else{
    audioForestCard.pause()
  }
})

soundRain.addEventListener('click',() => {
  if (audioRainCard.paused) {
    audioRainCard.play()
    } else {
    audioRainCard.pause();
    }
})

soundCoffe.addEventListener('click',() => {
  if(audioCoffeCard.paused){
    audioCoffeCard.play();
  }else{
    audioCoffeCard.pause();
  }
})

soundFireplace.addEventListener('click',() => {
  if(audioFireplaceCard.paused){
    audioFireplaceCard.play();
  }else{
    audioFireplaceCard.pause();
  }

  audio.loop(true)
})

//############################################

function renderTimer() {
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime - minutes * 60;
  
  minutesDisplay.innerHTML = `${minutes}`.padStart(2, '0');
  secondsDisplay.innerHTML = `${seconds}`.padStart(2, '0');
}

function runCountdown() {
  renderTimer();
  
  if (currentTime === 0) return;
  if (isPaused) return;
  
  interval = setTimeout(() => {
    currentTime--;
    runCountdown(currentTime);
  }, 1000)
}

buttonPlay.addEventListener('click',() => {
  isPaused = false
  clearTimeout(interval);
  runCountdown();
})

buttonStop.addEventListener('click',() =>{
  isPaused = true
})


buttonAddTime.addEventListener('click',() => {
  currentTime = currentTime + 300;
})

buttonLowerTime.addEventListener('click',() => {
  currentTime = currentTime - 300;

  if(initialTimer == 0) {
    renderTimer = 0
  }
})

renderTimer();

//############################################

const slider = document.querySelector('input')
const value = document.querySelector('.value')
value.textContent = slider.value

slider.oninput = () => {
  value.textContent = this.value;
}


//############################################

