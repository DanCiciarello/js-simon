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

// Crea un timer di n secondi

function timerCountdown (totalSeconds, variableOver) {

    let timer = setInterval (function () {

        // Scalo i secondi
        totalSeconds--

        // Appena arriva a 0 termino il timer
        if (totalSeconds === 0) {
            clearInterval(timer);
            variableOver = true;
        }

    }, 1000)
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