'use strict';

const parola = prompt('Inserisci una parola: '); // chiedo la parola all'utente

if (!isNaN(parola)) { // verifico che sia una parola
    alert('inserisci una parola');
}
console.log(parola);

function parolaPalindroma() {
    const lettereParola = parola.split(''); // divido la parola in un array di lettere
    // console.log(lettereParola);
    let parolaInvertita = lettereParola.reverse(); // le inverto
    // console.log(parolaInvertita);
    parolaInvertita = parolaInvertita.join(''); // riformo la parola invertita

    if (parola === parolaInvertita) {
        return true;
    }
    else {
        return false;
    }
}

if (parolaPalindroma()) {
    alert('La parola è palindrma');
}
else {
    alert('La parola non è palindroma');
}