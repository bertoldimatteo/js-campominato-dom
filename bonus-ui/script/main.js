
// BONUS 

// B1 creo un prompt con la difficoltà che l'utente vuole impostare

let boxEasy = document.getElementById("box-easy");
let boxMedium = document.getElementById("box-medium");
let boxHard = document.getElementById("box-hard");

let level;
let totalNumber;

boxEasy.addEventListener("click", easyHide);
boxMedium.addEventListener("click", mediumHide);
boxHard.addEventListener("click", hardHide);




function easyHide() {
    boxEasy.classList.add("transform")
    boxMedium.classList.add("hidden");
    boxHard.classList.add("hidden");
    totalNumber = 50;
    document.getElementById("numberBombs").innerHTML = totalNumber;

    for ( let i = 0; i < totalNumber; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("mini-box");
        const addElement = document.getElementById("box-easy");
        addElement.appendChild(newDiv);
    }
    
}

function mediumHide() {
    boxMedium.classList.add("transform")
    boxEasy.classList.add("hidden");
    boxHard.classList.add("hidden");
    totalNumber = 80;
    document.getElementById("numberBombs").innerHTML = totalNumber;

    for ( let i = 0; i < totalNumber; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("mini-box");
        const addElement = document.getElementById("box-medium");
        addElement.appendChild(newDiv);
    }
}

function hardHide() {
    boxHard.classList.add("transform")
    boxEasy.classList.add("hidden");
    boxMedium.classList.add("hidden");
    totalNumber = 100;
    document.getElementById("numberBombs").innerHTML = totalNumber;

    for ( let i = 0; i < totalNumber; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("mini-box");
        const addElement = document.getElementById("box-hard");
        addElement.appendChild(newDiv);
    }
}

// 1 creo una funzione che genera 16 numeri casuali da 1 a 100 per la CPU.
// 2 verifico che non ci siano numeri duplicati
//   salvo i numeri generati in un array
// function randomCPUnumber(min, max) {
//     return Math.floor(Math.random() * (max - min));
// }

// const bomb = [];
// const numberBombs = 16;
// const numberAttempts = totalNumber - numberBombs;

// while ( bomb.length < numberBombs ) {
//     let number = randomCPUnumber(1, 100);
    
//     if (!bomb.includes(number)) {
//         bomb.push(number);
//     }
// }

// console.log(bomb);

// 3 chiedo all'utente di inserire un numero da 1 a 100.
// const userNumberInsert = [];

// let userNumber;

// while (!bomb.includes(userNumber) && userNumberInsert.length < 5) {
//     do {
//         userNumber = Number(prompt("Digita un numero da 1 a 100"))
//     } while (isNaN(userNumber) || userNumber < 1 || userNumber > 100)
//     //   faccio un check che il numero inserito non sia già stato inserito precedentemente
//     if (!userNumberInsert.includes(userNumber)) {
//         userNumberInsert.push(userNumber);
//     } else {
//         alert("Il numero è già stato inserito, scegline un'altro")
//     }
//     if ( bomb.includes(userNumber) ){
//         alert(`Hai perso, hai digitato un totale di ${userNumberInsert.length} parole`);
//     };
// }

// console.log(userNumberInsert);
// 4 se il numero digitato è presente nei numeri della CPU il gioco termina altrimenti si continua con un altro numero


// 5 quando il gioco finisce esce una finestra con i risultati ovvero "quante volte l'utente ha digitato un numero prima di perdere".

