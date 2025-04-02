// # RACCOLTA DATI

let x;
let outputText = ``;

// # SVOLGIMENTO

// Controllo ogni singolo numero da 1 a 100 con il for

for (x = 1; x <= 100; x++) {
    // Se è multiplo di 3 ma non è multiplo di 5 allora stampo `Fizz`
    if (x % 3 === 0 && x % 5 !== 0) {
        outputText = `Fizz`;
    }
    // Se è multiplo di 5 ma non è multiplo di 3 allora stampo `Buzz`
    else if (x % 3 !== 0 && x % 5 === 0) {
        outputText = `Buzz`;
    }
    // Se è sia multiplo di 3 sia multiplo di 5 allora stampo `FizzBuzz`
    else if ((x % 3 === 0) && (x % 5 === 0)) {
        outputText = `FizzBuzz`;
    }
    // altrimenti se non è nè multiplo di 3 nè multiplo di 5 stampo il numero
    else {
        outputText = x;
    }
    console.log(outputText);
}

