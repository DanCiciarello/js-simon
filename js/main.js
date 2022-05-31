// Recupero gli elementi dal dom
let playBtn = document.querySelector("#playBtn");
let numbersSection = document.querySelector("#numbersSection");
let resultSection = document.querySelector("#resultSection");

// Aggiungo un evento al tasto
playBtn.addEventListener("click", function(){

    // Resetto la sezione di gioco
    numbersSection.classList.remove("d-none");
    resultSection.innerHTML= "";

    // Creo 5 numeri casuali
    let computerNums = generateRandomNumbers(1,1000,5);
    
    // Stampo i numeri in pagina
    numbersSection.innerHTML = `<p>Hai 30 secondi per memorizzare questi numeri:</p><br>
                                <h2>${computerNums.join(" - ")}</h3>`;

    // Faccio partire il gioco dopo 30 secondi
    setTimeout(playGame, 30000, numbersSection, computerNums, resultSection);

});

// ------------------------------------------------------------- //
// ------------------------------------------------------------- //