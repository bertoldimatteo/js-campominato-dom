
// BONUS 

// B1 creo un prompt con la difficoltà che l'utente vuole impostare

let boxEasy = document.querySelector(".box-easy");
let boxMedium = document.querySelector(".box-medium");
let boxHard = document.querySelector(".box-hard");

let level;
let totalNumber;

if (level === boxEasy) {
    totalNumber = 100;
} else if ( level === boxMedium) {
    totalNumber = 80;
} else {
    totalNumber = 50;
}

let viewMode = document.getElementById("numberBombs").innerHTML = totalNumber;
console.log(totalNumber);

boxEasy.addEventListener("click", easyHide);
boxMedium.addEventListener("click", mediumHide);
boxHard.addEventListener("click", hardHide);

function easyHide() {
    boxEasy.classList.add("tranform")
    boxMedium.classList.add("hidden");
    boxHard.classList.add("hidden");
    
}

function mediumHide() {
    boxMedium.classList.add("tranform")
    boxEasy.classList.add("hidden");
    boxHard.classList.add("hidden");
}

function hardHide() {
    boxHard.classList.add("tranform")
    boxEasy.classList.add("hidden");
    boxMedium.classList.add("hidden");
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

