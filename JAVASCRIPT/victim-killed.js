//Botón seguir matando
const  nextButton = document.querySelector("#next-victim-button");
const nextSound = new Audio("/Sounds/slashkut.mp3");

nextButton.addEventListener("click", function(event) {
  nextSound.currentTime = 0;  
  nextSound.play();

  setTimeout(function(redirectToPage) { 
    window.location.href = "./select-gamers.html";
    }, nextSound.duration * 1000);
});
 

const nameArray = localStorage.getItem('nameArray');
let names = nameArray ? JSON.parse(nameArray) : [];

//const nextVictim = document.querySelector('#next-victim-button');

nextVictim.addEventListener('click', clearMemory);

function clearMemory() {
    localStorage.removeItem('nameArray');
    window.location.href = "./select-gamers.html";
}

