## Parola palindroma

Chiedo all'utente una parola da inserire tramite un prompt e la salvo in una variabile. Verifico che sia una parola e non un numero, se no restituisco un errore.

All'interno di una funzione eseguo:
****
Utilizzando il metodo delle stringhe `split` divido la parola in un simil array composto dalle lettere della parola e la salvo in una variabile.
Inverto le lettere con il metodo degli array `reverse()` e le salvo in una variabile parola invertita.
Usando il metodo degli array `join()` unisco tutti gli elementi dell'array in una stringa, e li risalvo in parola invertita.
Con un if controllo che le due parole siano uguali; se lo sono resttuisco true, se no false e terino la funzione.
*****

Se la funzione restituisce true, stampo con un alert che le parole sono palindrome, se no il contrario.


## Pari e dispari

Chiedo all'utente tramite prompt di scegliere pari o dispari e di inserire un numero compreso da 1 a 5 e salvo entrambi i valori in due variabili. Verifico che i valori immessi rispettino le richieste se no restituisco errore.

Creo una prima funzione che, dato come valore un numero, restituisca un numero random compreso tra 1 e il numero inserito.
Creo una varibile somma e sommo il numero dell'utente con quello generato dalla funzione.
Creo una seconda funzione che prenda in input la somma e verifichi se il numero è modulo 2 (pari). Se lo è restituisco true, se no false.

Tramite un if, se la funzione è true e l'utente ha scelto pari stampo che vince l'utente.
Se è true e l'utente ha scelto dispari stampo che vince il computer.
Se è false e l'utente ha scelto dispari vince l'utente, se no vince il computer