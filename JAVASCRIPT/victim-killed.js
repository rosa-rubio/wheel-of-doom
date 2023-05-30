const nameArray = localStorage.getItem('nameArray');
let names = nameArray ? JSON.parse(nameArray) : [];
const btnReset = document.getElementById('next-victim-button')

btnReset.addEventListener('click', clearMemory);

function clearMemory() {
    localStorage.removeItem(nameArray);
}
