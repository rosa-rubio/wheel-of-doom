//Reproductor de música con botón de pause/play

const musicPlayer = document.getElementById('music-player');
const buttonPausePlay = document.getElementById('pause-play-button');

buttonPausePlay.addEventListener('click', function() {
  if (musicPlayer.paused) {
    musicPlayer.play();
    buttonPausePlay.innerHTML = '<img id="pause-play-button" src="/img/button-pause1.png" alt="Icono para pausar música">';
  } else {
    musicPlayer.pause();
    buttonPausePlay.innerHTML = '<img id="pause-play-button" src="/img/button-play.png" alt="Icono para reproducir música">';
  }
});

//Boton Ingresar al Juego // 
const accessButton = document.querySelector("#access-button");
const knifeSound = new Audio("/Sounds/slashkut.mp3");

accessButton.addEventListener("click", function(event) {
    knifeSound.currentTime = 0;
    knifeSound.play();

setTimeout(function(redirectToPage) { 
  window.location.href = "./select-gamers.html";
  }, knifeSound.duration * 1000);

  event.preventDefault();
});

