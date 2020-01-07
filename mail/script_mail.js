var nomeUtente = prompt("Scrivi la tua mail?");
var eMail = ["rosso@gmail.com","giallo@gmail.com","verde@gmail.com","blu@gmail.com","viola@gmail.com"];
var trovato = false;

for (var i = 0; i < eMail.length; i++) {
  var mail = eMail[i];

  if (nomeUtente==mail) {
    trovato = true;
    alert("Utente riconosciuto")
  }

  else if (nomeUtente!=mail)
    trovato = false;
    alert("Utente non riconosciuto, riprova!!")
}
