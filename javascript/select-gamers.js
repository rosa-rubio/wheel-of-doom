const nameInput = document.querySelector("#victims");
const addButton = document.querySelector(".add-victim");
const nameList = document.querySelector("#name-list");
const randomButton = document.querySelector(".random-button");

let nameArray = [];

addButton.addEventListener("click", function() {
  const name = nameInput.value.trim().toLowerCase();

  if (name === "") {
    showAlertMessage("¡Debes introducir una víctima!");
  } else {
    if (!nameArray.includes(name)) {
      nameArray.push(name);
      createListItem(name);
      nameInput.value = "";
    } else {    
      showAlertMessage("¡Esta víctima ya está en la lista!");
      nameInput.value = "";
    }
  }
});

nameInput.addEventListener("focus", function() {
  hideAlertMessage();
});

function createListItem(name) {
  const listItem = document.createElement("li");
  listItem.textContent = name.charAt(0).toUpperCase() + name.slice(1);
  listItem.classList.add("list-name");
  nameList.appendChild(listItem);

  const rmvButton = document.createElement("button");
  rmvButton.classList.add("rmv-button");
  rmvButton.textContent = "x";
  listItem.appendChild(rmvButton);

  rmvButton.addEventListener("click", function() {
    const index = nameArray.indexOf(name);
    nameArray.splice(index, 1);
    listItem.remove();
    rmvButton.remove();
  });
}

function showAlertMessage(message) {
  const alertMsg = document.createElement("p");
  alertMsg.textContent = message;
  alertMsg.classList.add("alert-message");
  nameInput.insertAdjacentElement("afterend", alertMsg);
}

function hideAlertMessage() {
  const alertMsg = document.querySelector(".alert-message");
  if (alertMsg) {
    alertMsg.remove();
  }
}

randomButton.addEventListener("click", function() {
    if (nameArray.length > 0) {
      let randomNumb = Math.floor(Math.random() * nameArray.length);
      console.log(nameArray[randomNumb]);
      nameArray.splice(randomNumb, 1);
      const listItemToRemove = nameList.childNodes[randomNumb];
      listItemToRemove.remove();
    } 
  });

  
//Botón añadir victima
const  victimButton = document.querySelector(".add-victim");
const knifeSound = new Audio("/Sounds/slashkut.mp3");

victimButton.addEventListener("click", function(event) {
  knifeSound.currentTime = 0;  
  knifeSound.play();
});

//Botón pulsar para matar
const  killButton = document.querySelector(".random-button");
const killSound = new Audio("/Sounds/BlastMine.ogg");

killButton.addEventListener("click", function(event) {
  killSound.currentTime = 0;  
  killSound.play();

  // setTimeout(function(redirectToPage) { 
  //   window.location.href = "./victim-killed.html";
  //   }, killSound.duration * 1000);
});

//Botón back
const logobutton = document.querySelector(".logo");

logobutton.addEventListener("click", function(backToPage){
  window.location.href = "./start-game.html";
});


