'use strict';

const pariODispari = prompt('Scrivi la tua scelta: pari o dispari?'); // chiedo pari o dispari
const numeroUtente = Number(prompt('Inserisci un numero da 1 a 5')); // chiedo un numero
let somma = 0;

if (isNaN(numeroUtente)) { // verific che sia un numero
    alert('Inserisci un numero');
}

function numeroRandom(num) {  // funzione che crea un numero casuale da 1 a num
    return Math.floor(Math.random() * num + 1);
}

somma = numeroRandom(5) + numeroUtente; // sommo il numero dell'utente con quello generato dalla funzione

function pari(numero) { // funzione che verifica se un numero è pari
    if (numero % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

if (pari(somma) && pariODispari === 'pari') {
    alert('Hai vinto');
}
else if (!pari(somma) && pariODispari === 'dispari') {
    alert('Hai vinto');
}
else {
    alert('Vince il compuer');
}



