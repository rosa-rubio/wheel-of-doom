const nameArray = localStorage.getItem('nameArray');
let names = nameArray ? JSON.parse(nameArray) : [];

const nextVictim = document.querySelector('#next-victim-button');

nextVictim.addEventListener('click', clearMemory);

function clearMemory() {
    localStorage.removeItem('nameArray');
    window.location.href = "./select-gamers.html";
}
 