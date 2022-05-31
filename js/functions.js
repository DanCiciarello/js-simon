// Genera numeri random

function generateRandomNumbers (numMin, numMax, totNum) {

    // Creo un array vuoto
    let numArray = [];

    // Ciclo fin quando l'array contiene il numero desiderato di elementi
    while (numArray.length < totNum) {

        // Creo un numero casuale
        let randomNum = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);

        // Aggiungo il numero ad un array
        numArray.push(randomNum);

    }

    // Ritorno l'array completo
    return(numArray);

};

// ------------------------------------------------------------- //
// ------------------------------------------------------------- //

// Confronta due array

function compareArrays (startArray, userArray) {

    let numCounter = 0;

    for (i = 0; i < userArray.length; i++) {
        
        let checkNum = userArray[i];
        
        if (startArray.includes(checkNum)) {
            numCounter++;
        }
    }

    return numCounter;

};

// ------------------------------------------------------------- //
// ------------------------------------------------------------- //

// Completa il gioco

function playGame (numElement, startArray, resultElement) {

    // Nascondo il div con i numeri
    numElement.classList.add("d-none");

    // Creo un array vuoto per i numeri dell'utente
    let userNums = [];

    // Chiedo all'utente 5 numeri
    while (userNums.length < 5) {

        let userInput = parseInt(prompt("Inserisci i numeri visti in precedenza"));

        if(isNaN(userInput)) {
            alert("Inserisci un numero valido!");
        } else {
            userNums.push(userInput);
        }
    }

    // Comparo gli array
    let challengeResult = compareArrays(startArray, userNums);

    // Stampo il risultato
    if (challengeResult === 0) {
        resultElement.innerHTML = `<h4>Mi spiace, non hai indovinato nessun numero 😞</h4>`
    } else if (challengeResult === 5) {
        resultElement.innerHTML = `<h4>Ottima memoria, hai indovinato tutti i numeri! 🎉</h4>`
    } else {
        resultElement.innerHTML = `<h4>Sei andato bene, hai indovinato ${challengeResult} numeri. Gioca di nuovo per fare ancora meglio! 💪🏻</h4>`
    }

};

// ------------------------------------------------------------- //
// ------------------------------------------------------------- //