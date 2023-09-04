/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo)
 */

/* 
strumenti:
-if/else
-const
-console.log
-prompt
-Number

 */

//chiedere km

document.querySelector('button').addEventListener('click', function (e) {

    const lunghezza = document.getElementById("lunghezza").value;
    console.log(lunghezza)
    const eta = document.getElementById("eta").value;
    console.log(eta)
    const userName = document.getElementById("userName").value;
    console.log(userName)
    const userNameTicket = document.getElementById("userNameTicket");
    userNameTicket.innerHTML = userName

    //calcolare costo tratta
    const costoTratta = lunghezza * 0.21;
    console.log('prezzo intero: ' + costoTratta);

    //calcolare eventuale sconto

    if (eta === "minorenne") {
        const costoFinale = (costoTratta / 100) * 80;
        const costoArrotondato = costoFinale.toFixed(2);
        console.log('prezzo con sconto: ' + costoArrotondato);
        const costoTicket = document.getElementById("costoTicket");
        costoTicket.innerHTML = costoArrotondato + " €"

    } else if (eta === "senior") {
        const costoFinale = (costoTratta / 100) * 60;
        const costoArrotondato = costoFinale.toFixed(2);
        console.log('prezzo con sconto: ' + costoArrotondato);
        const costoTicket = document.getElementById("costoTicket");
        costoTicket.innerHTML = costoArrotondato + " €"

    } else {
        const costoArrotondato = costoTratta.toFixed(2);
        const costoTicket = document.getElementById("costoTicket");
        costoTicket.innerHTML = costoArrotondato + " €"
    }

});


let annulla = document.getElementById('annulla');


annulla.addEventListener('click', function () {

    location.reload();
});

