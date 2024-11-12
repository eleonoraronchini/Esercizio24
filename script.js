const sendButton = document.querySelector(".sendBtn");
const deleteButton = document.querySelector(".deleteBtn");

const counterElement = document.getElementsByClassName("counter");
let counter = 0;

function updateCounter() {
  counter ++;
  counterElement.textContent = counter;
}
setInterval(updateCounter, 1000);

window.addEventListener("DOMContentLoaded", function () {
    const inputName = document.getElementById("input-name");
    const savedUsers = document.querySelector(".usersList ul"); // Seleziona l'ul dentro usersList

    // Recupera la lista dei nomi dal localStorage
    const savedNames = JSON.parse(localStorage.getItem("userNames")) || [];

    // Mostra la lista dei nomi salvati, se presente
    savedNames.forEach(name => {
        const userLi = document.createElement("li");
        userLi.textContent = `User: ${name}`;
        savedUsers.appendChild(userLi);
    });

    sendButton.onclick = function addUser() {
        const userName = inputName.value.trim();

        if (userName) {
            // Aggiungi il nuovo nome alla lista esistente di nomi
            savedNames.push(userName);

            // Salva la lista aggiornata in localStorage
            localStorage.setItem("userNames", JSON.stringify(savedNames));

            // Mostra il nuovo nome nella lista
            const userLi = document.createElement("li");
            userLi.textContent = `User: ${userName}`;
            savedUsers.appendChild(userLi);

            // Pulisce il campo input
            inputName.value = "";
        } else {
            alert("Per favore, inserisci un nome.");
        }
    };

    deleteButton.onclick = function deleteUsers() {
        // Rimuove la lista di nomi da localStorage
        localStorage.removeItem("userNames");

        // Rimuove tutti gli <li> dalla lista
        savedUsers.innerHTML = "";

        // Pulisce il campo input
        inputName.value = "";
    };
});