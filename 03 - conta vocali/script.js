/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
// console.log(word.length)

// Dichiara la funzione qui.
function numVocali(word){
    let result = 0;
    const Vocali = "aeiou"

    for(let i = 0; i < word.length; i++){
        curVocali = word[i]

        if(Vocali.includes(curVocali) ){
            result++
        }

        
    }
    return result
}

// Invoca la funzione qui e stampa il risultato in console
console.log(numVocali(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)