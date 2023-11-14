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