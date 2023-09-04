/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const listaEl = document.getElementById('lista');


document.querySelector('button').addEventListener('click', function (e) {

    document.getElementById("tutto").classList.toggle("none");
})
for (let i = 1; i <= 100; i++) {




    const itemEl = document.createElement('li')
    itemEl.append(".")
    listaEl.append(itemEl)




    itemEl.addEventListener('click', function () {
     itemEl.classList.toggle("bg-blue"); 
     console.log(i)  
    })
}

let annulla = document.getElementById('annulla');


annulla.addEventListener('click', function () {

    location.reload();
});