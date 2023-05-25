
    const nameInput = document.querySelector("#name-input");
    const addButton = document.querySelector("#add-btn");
    const nameList = document.querySelector("#name-list");

    const nameArray = [];

    addButton.addEventListener("click", function() {
    const name = nameInput.value.trim();       
    
    if (name !== "") {
        if (nameArray.includes(name)) {
            const alertMsg1 = document.createElement("p");
            alertMsg1.textContent = "¡Esta víctima ya está en la lista!";
            alertMsg1.classList.add("alert-message");
            document.body.appendChild(alertMsg1);
            nameInput.value = "";   
    
        } else {
            nameArray.push(name);
            const listItem = document.createElement("li");
            listItem.textContent = name;
            listItem.classList.add("list-name");
            nameList.appendChild(listItem);
            const rmvButton = document.createElement("button");
            rmvButton.classList.add("rmv-button");
            rmvButton.textContent = "x";
            nameList.appendChild(rmvButton);
            nameInput.value = "";
        
    }}  else {
            const alertMsg2 = document.createElement("p");
            alertMsg2.textContent = "¡Debes introducir una víctima!";
            alertMsg2.classList.add("alert-message");
            showAlertMessage(alertMsg2);
        }
})    

nameInput.addEventListener("focus", function() {
    removeAlertMessage();
  });
  
  function showAlertMessage(msg) {
    document.body.appendChild(msg);
    nameInput.value = "";
  }
  
  function removeAlertMessage() {
    const alertMsg = document.querySelector(".alert-message");
    if (alertMsg) {
      alertMsg.remove();
    }
  }

//   function removeName() {
//   const rmvButton = document.querySelector(".rmv-button");
// }

 

//función aleatoria prueba
const array = ['Pedro', 'María', 'Juan', 'Marta'];
let randomNumb = Math.floor(Math.random() * array.length);
console.log(array[randomNumb]);


//función quitar coder añadido

