var Word = require("./word.js");
var inquirer = require("inquirer");

var wordsToGuess = ["rhythmic", "oxygen", "unzip", "awkward", "zombie"];
var position = Math.floor(Math.random() * wordsToGuess.length);

var word = new Word(wordsToGuess[position]);
console.log(word.toString());

guessRound();
var remainingGuesses = 10;

function guessRound() {
    inquirer
        .prompt({
            type: "input",
            name: "guess",
            message: "Guess a Letter",
        })
        .then(function (response) {
            word.checkChar(response.guess)
            console.log(word.toString())

            if (remainingGuesses > 0) {
                remainingGuesses--;
                guessRound();
            }
        });
};


// wordsToGuess[0].Word();

// function charToGuess(wordsToGuess) {
//     for (var i = 0; i < wordsToGuess.length; i++) {
//         var nextGuess = wordsToGuess[i]
//     }
// };

