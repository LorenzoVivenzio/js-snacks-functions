/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
// console.log(names)

// Dichiara la funzione qui.
function sameLetter(names, letter){
    let letterA = [];

    for(let i = 0; i < names.length; i++){
        
        const curLetterA = names[i] 
        // console.log(curLetterA)

        if(curLetterA[0] === letter ){
            letterA.push(curLetterA)
        }



        
    }
    return letterA
}

// Invoca la funzione qui e stampa il risultato in console

console.log(sameLetter(names, "A"))
console.log(sameLetter(names, "L"))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]