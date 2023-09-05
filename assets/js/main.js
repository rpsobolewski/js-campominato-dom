/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const listaEl = document.getElementById('lista');

let bombNumbers = [];
let goodNumbers = [];
let pointNumbers = 0;
let maxPoints = 0;

let p = 0;
document.querySelector('button').addEventListener('click', function (e) {
    const difficolta = document.getElementById("difficolta").value;


    //per rendere quadrato
    if (Number(difficolta) == 100) {
        document.getElementById("body").classList.add("widthMax")
        maxPoints = 84;
    } else if (Number(difficolta) == 81) {
        document.getElementById("body").classList.add("widthMed")
        maxPoints = 65;

    } else {
        document.getElementById("body").classList.add("widthMin")
        maxPoints = 33;

    }

    //generazione numeri bomba


    let i = 0;
    while (i < 16) {
        let randomNumber = Math.floor(Math.random() * Number(difficolta) + 1);

        //per non far ripetere i numeri
        if (bombNumbers.includes(randomNumber)) {
            console.log("il numero è gia presente")
        } else {
            bombNumbers.push(randomNumber);
            i++;
        }

    }









    console.log(bombNumbers)


    i = 1;
    while (i <= difficolta) {
        if (bombNumbers.includes(i)) {

            i++;
        } else {
            goodNumbers.push(i);
            i++;
        }
    }
    console.log(goodNumbers);









    document.getElementById("buttonSelector").classList.add("none");

    fieldGeneration(difficolta);
})





function fieldGeneration(difficolta) {



    for (let i = 1; i <= difficolta; i++) {




        const itemEl = document.createElement('li')
        itemEl.append(i)
        listaEl.append(itemEl)


        let cliccati = [];

        itemEl.addEventListener('click', function () {



            if (bombNumbers.includes(i)) {
                p--;
                itemEl.classList.add("bg-red")
                document.getElementById("tutto").classList.add("none");
                document.getElementById("perso").classList.toggle("none");
                console.log("hai perso")
                console.log(i)

            }
            if (cliccati.indexOf(i) === -1) {
                cliccati.push(i);
                p++;
                itemEl.classList.add("bg-blue");
                const punteggio = document.getElementById("punteggio");
                punteggio.innerHTML = p;
                console.log(cliccati);
                pointNumbers++;


                if (pointNumbers == maxPoints) {
                    
                    

                    document.getElementById("tutto").classList.add("none");
                    document.getElementById("vinto").classList.toggle("none");
                } else {
                    console.log(pointNumbers);
                }

            } else {
                console.log("gia cliccato");
            }








        })
    }
}



let annulla = document.getElementById('annulla');


annulla.addEventListener('click', function () {

    location.reload();
});









