// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50



// BONUS 

// B1 creo un prompt con la difficoltà che l'utente vuole impostare

// const level = Number(prompt("Benvenuto! indica la difficoltà da impostare da 0 a 2"));


// 1 creo una funzione che genera 16 numeri casuali da 1 a 100 per la CPU.
// 2 verifico che non ci siano numeri duplicati
//   salvo i numeri generati in un array
function randomCPUnumber(min, max) {
    return Math.floor(Math.random() * (max - min));
}

const bomb = [];

while ( bomb.length < 16) {
    let number = randomCPUnumber(1, 100);
    
    if (!bomb.includes(number)) {
        bomb.push(number);
    }
}

console.log(bomb);

// 3 chiedo all'utente di inserire un numero da 1 a 100.
const userNumberInsert = [];

let userNumber;

while (!bomb.includes(userNumber) && userNumberInsert.length < 5) {
    do {
        userNumber = Number(prompt("Digita un numero da 1 a 100"))
    } while (isNaN(userNumber) || userNumber < 1 || userNumber > 100)
    //   faccio un check che il numero inserito non sia già stato inserito precedentemente
    if (!userNumberInsert.includes(userNumber)) {
        userNumberInsert.push(userNumber);
    } else {
        alert("Il numero è già stato inserito, scegline un'altro")
    }
    if ( bomb.includes(userNumber) ){
        alert(`Hai perso, hai digitato un totale di ${userNumberInsert.length} parole`);
    };
}

console.log(userNumberInsert);
// 4 se il numero digitato è presente nei numeri della CPU il gioco termina altrimenti si continua con un altro numero


// 5 quando il gioco finisce esce una finestra con i risultati ovvero "quante volte l'utente ha digitato un numero prima di perdere".

