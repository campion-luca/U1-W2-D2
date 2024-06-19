/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
console.log("=============Esercizio 1===============");
let num1 = 10;
let num2 = 27;

if (num1 > num2) {
  console.log("il numero maggiore è " + num1)
} else if (num1 == num2) {
  console.log("inserire due numeri diversi") /* attento al numero di = che metti */
} else {
  console.log(num2)
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
console.log("=============Esercizio 2===============");

let num3 = 8;

if (num3 !== 5) {
  console.log("not equal");
} else {
  console.log("I due numeri sono uguali");
}


/* const numPersonal = document.getElementById(num);
const btnSend = document.getElementById(send);

btnSend.addEventListener("click", function () {
  if (num = "5") {
    console.log("equal");
  } else {
    console.log("equal");
  }
}) */


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
console.log("=============Esercizio 3===============");

let num4 = 15;

if (num4 % 5 === 0) {
  console.log("divisibile per 5"); /* la percentuale si riferisce al "resto" della divisione intercorsa  dunque 15/5 fa 3 con resto 0 */
} else {
  console.log("NON divisibile per 5")
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
console.log("=============Esercizio 4===============");

let num5 = 15;
let num6 = 27;

if (num5 === 8 || num6 === 8 || num5 - num6 === 8 || num6 - num5 === 8 || num5 + num6 === 8) {
  console.log("VERIFICATO");
} else {
  console.log("nessuna è verificata");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
console.log("=============Esercizio 5===============");

let totalShoppingCart = 55;
let delivery = 10;
let checkout;

if (totalShoppingCart > 50) {
  checkout = totalShoppingCart;
} else {
  checkout = totalShoppingCart + delivery;
}
console.log(checkout);



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
console.log("=============Esercizio 6===============");

let discount = 0.2;
totalShoppingCart = totalShoppingCart * (1 - discount);

if (totalShoppingCart > 50) {
  checkout = totalShoppingCart;
} else {
  checkout = totalShoppingCart + delivery;
}
console.log(checkout);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
console.log("=============Esercizio 7===============");

let numPrimo = 15;
let numSecondo = 20;
let numTerzo = 21;

if (numPrimo > numSecondo && numPrimo > numTerzo) {
  if (numSecondo > numTerzo) {
    console.log(numPrimo, numSecondo, numTerzo);
  } else {
    console.log(numPrimo, numTerzo, numSecondo);
  }
} else if (numSecondo > numPrimo && numSecondo > numTerzo) {
  if (numPrimo > numTerzo) {
    console.log(numSecondo, numPrimo, numTerzo);
  } else {
    console.log(numSecondo, numTerzo, numPrimo);
  }
} else {
  if (numPrimo > numSecondo) {
    console.log(numTerzo, numPrimo, numSecondo)
  } else {
    console.log(numTerzo, numSecondo, numPrimo);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
console.log("=============Esercizio 8===============");

let integer = 15;

if (typeoff(integer) === "number") {
  console.log("è un numero");
} else {
  console.log("NON è un numero");
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
console.log("=============Esercizio 9===============");

if (integer % 2 === 0) {  /* esercizio n'8 stringa 143 */
  console.log("Il numero è pari");
} else {
  console.log("Il nmeroo è pari");
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/
console.log("=============Esercizio 10===============");

let val = 7
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
console.log("=============Esercizio 11===============");

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
} */

me.city = "Toronto";
console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
console.log("=============Esercizio 12===============");

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
console.log("=============Esercizio 13===============");

me.skills.length = me.skills.length - 1 ; // meglio il metodo pop
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
console.log("=============Esercizio 14===============");

const myArr = [];

myArr[0] = 1 ;
myArr[1] = 2 ;
myArr[2] = 3 ;
myArr[3] = 4 ;
myArr[4] = 5 ;
myArr[5] = 6 ;
myArr[6] = 7 ;
myArr[7] = 8 ;
myArr[8] = 9 ;
myArr[9] = 10 ; // preferibile usare il metodo push.


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
console.log("=============Esercizio 15===============");

myArr[9] = 100;
console.log(myArr);