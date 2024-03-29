// Generatore di numeri random

// creo variabile giocatore 1
const player1 = document.getElementById("player1"); // stringa 

// creo variabile giocatore 2
const player2 = document.getElementById("player2"); // stringa

// creo variabile genera numero
const generaNumero = document.getElementById("genera-numero"); 

// collego la variabile generaNumero all evento
generaNumero.addEventListener("click", function(){
    
    let esito1 = Math.floor(Math.random()* 6) + 1; // number
    console.log(esito1);

    let esito2 = Math.floor(Math.random()* 6) + 1; // number
    console.log(esito2);
    
    let content = ""; // stringa

    if (esito1 > esito2) {
        console.log("Player1 vince");
        content = "Player1 vince";
    } else if (esito1 < esito2) {
        console.log("Player2 vince");
        content = "Player2 vince";
    } else {
        console.log("risultato di parità");
        content = "Risultato di parità";
    }
    
    document.getElementById("esito-lancio").innerHTML = content;

});
