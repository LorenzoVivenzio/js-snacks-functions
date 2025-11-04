/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
// console.log(names)


// Dichiara la funzione qui.
function inizialeNome(names){
    let primaLettera = []

    for(let i = 0; i < names.length; i++){
        const curPrimaLettera = names[i]
        primaLettera.push(curPrimaLettera[0])

    }
    return primaLettera

}

// Invoca la funzione qui e stampa il risultato in console
console.log(inizialeNome(names))


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]