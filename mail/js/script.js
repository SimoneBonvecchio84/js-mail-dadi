// creo listaMail ovvero array

const listaMail = ["erika@gmail.com" , "ugo@gmail.com", "anna@gmail.com" , "lisa@gmail.com"];

// creo variabile d'appoggio

let accessoConsentito = false;

// creo variabile da collegare al btn

const inviaMail = document.getElementById("inviaMail");

// creo evento click da collegare al bottone 

inviaMail.addEventListener("click" , function() {

    // creo variabile avatarMail da collegare a input HTML

    const avatarMail = document.getElementById("avatarMail").value;

    // creo ciclo for per controllare i dati presenti nell'array
    
    // creo una variabile vuota, nella quale poi deposito il risultato 
    // dell' accesso
    let content = "";

    for(let i = 0; i < listaMail.length; i++) {

        // Creo condizione

        if(avatarMail === listaMail[i]) {
            accessoConsentito = true;
        }
    }

    // Condizione di stampa

    if(accessoConsentito) {
        console.log("accesso consentito, BENTORNATO!");
        content = "accesso consentito, BENTORNATO!"
    } else {
        console.log("accesso negato");
        content = "accesso negato";
    }
    
    

    document.getElementById("risultato").innerHTML = content;

});







