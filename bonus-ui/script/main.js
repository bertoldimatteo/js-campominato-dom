
// IN CASO DI SCLERO PIANGI SOLAMENTE DOPO AVER SALVATO

let level;
let totalNumber;

let boxEasy = document.getElementById("box-easy");
let boxMedium = document.getElementById("box-medium");
let boxHard = document.getElementById("box-hard");

boxEasy.classList.add("easy-box");
boxMedium.classList.add("easy-box");
boxHard.classList.add("easy-box");

boxEasy.addEventListener("click", easyHide);
boxMedium.addEventListener("click", mediumHide);
boxHard.addEventListener("click", hardHide);

let number = 1;
let boxNumber = 1;

function easyHide() {
    boxEasy.classList.add("transform")
    boxMedium.classList.add("hidden");
    boxHard.classList.add("hidden");
    totalNumber = 50;
    document.getElementById("numberBombs").innerHTML = totalNumber;

    let arrayNumber = 0;
    let easyArray = [];

    while (easyArray.length < totalNumber) {
        let number = Math.floor((Math.random() * 50) + 1);
        
        if (!easyArray.includes(number)) {
            easyArray.push(number);
        }
    }

    console.log(easyArray);

    for ( let i = 0; i < totalNumber; i++) {

        const newDiv = document.createElement("div");
        newDiv.classList.add("mini-box");
        newDiv.setAttribute("id", `insideBox${boxNumber}`);
        const addElement = document.getElementById("box-easy");
        addElement.appendChild(newDiv);

        const insideNumber = document.createElement("p");
        insideNumber.classList.add("number");
        insideNumber.append(easyArray[arrayNumber]);
        const addNumber = document.getElementById(`insideBox${boxNumber}`);
        addNumber.appendChild(insideNumber);

        boxNumber++;
        number++;
        arrayNumber++;
    }
    
}

function mediumHide() {
    boxMedium.classList.remove("easy-box")
    boxMedium.classList.add("medium-box")
    boxMedium.classList.add("transform")
    boxEasy.classList.add("hidden");
    boxHard.classList.add("hidden");
    totalNumber = 80;
    document.getElementById("numberBombs").innerHTML = totalNumber;

    let arrayNumber = 0;
    let mediumArray = [];

    while (mediumArray.length < totalNumber) {
        const number = Math.floor((Math.random() * 80) + 1);
        
        if (!mediumArray.includes(number)) {
            mediumArray.push(number);
        }
    }

    console.log(mediumArray);

    for ( let i = 0; i < totalNumber; i++) {

        const newDiv = document.createElement("div");
        newDiv.classList.add("mini-box");
        newDiv.setAttribute("id", `insideBox${boxNumber}`);
        const addElement = document.getElementById("box-medium");
        addElement.appendChild(newDiv);

        const insideNumber = document.createElement("p");
        insideNumber.classList.add("number");
        insideNumber.append(mediumArray[arrayNumber]);
        const addNumber = document.getElementById(`insideBox${boxNumber}`);
        addNumber.appendChild(insideNumber);

        boxNumber++;
        number++;
        arrayNumber++;
    }
}

function hardHide() {
    boxHard.classList.remove("easy-box")
    boxHard.classList.add("hard-box")
    boxHard.classList.add("transform")
    boxEasy.classList.add("hidden");
    boxMedium.classList.add("hidden");
    totalNumber = 100;
    document.getElementById("numberBombs").innerHTML = totalNumber;

    let arrayNumber = 0;
    let hardArray = [];

    while (hardArray.length < totalNumber) {
        const number = Math.floor((Math.random() * 100) + 1);
        
        if (!hardArray.includes(number)) {
            hardArray.push(number);
        }
    }

    console.log(hardArray);

    for ( let i = 0; i < totalNumber; i++) {

        const newDiv = document.createElement("div");
        newDiv.classList.add("mini-box");
        newDiv.setAttribute("id", `insideBox${boxNumber}`);
        const addElement = document.getElementById("box-hard");
        addElement.appendChild(newDiv);
        
        const insideNumber = document.createElement("p");
        insideNumber.classList.add("number");
        insideNumber.append(hardArray[arrayNumber]);
        const addNumber = document.getElementById(`insideBox${boxNumber}`);
        addNumber.appendChild(insideNumber);

        boxNumber++;
        number++;
        arrayNumber++;
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

