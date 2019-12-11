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
            validate: function validateChar(guess) {
                if (guess.length === 1 && /[a-z]/.test(guess)) {
                    return true
                } else {
                    return "Please, type a letter";
                }
            }
        })
        .then(function (response) {

            if (word.checkChar(response.guess)) {
                console.log("Correct!!");
            } else {
                remainingGuesses--;
                console.log("Incorrect!");
                console.log("Remaining Guesses: " + remainingGuesses);
            }

            console.log(word.toString());
            if (!word.toString().includes("_")) {
                console.log("You Win!!");
            } else if (remainingGuesses > 0) {
                guessRound();
            } else {
                console.log("Game Over");
            }
        });
};

