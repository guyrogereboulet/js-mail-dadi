var giocatoreUno = parseInt(prompt("inserisci un numero da 0 a 6"));
var giocatoreDue = Math.floor(Math.random() * 7);
console.log(giocatoreDue);

if (giocatoreUno>giocatoreDue) {
  console.log( giocatoreUno +" è maggiore di "+ giocatoreDue + " Hai vinto!!");

} else {
  console.log( giocatoreDue + " è minore di "+ giocatoreUno + " Hai vinto!!");
}
