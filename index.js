var Word = require("./word.js");
var inquirer = require("inquirer");

var wordsToGuess = ["caperucita"];

// var position = random

var word = new Word(wordsToGuess[0]);
console.log(word.toString())

// word.checkChar("a");
// console.log(word.toString());
inquirer
    .prompt({
        type: "input",
        name: "guess",
        message: "Guess a Letter",
    })
    .then(function (response) {
        word.checkChar(response.guess)
        console.log(word.toString())
    });


// wordsToGuess[0].Word();

// function charToGuess(wordsToGuess) {
//     for (var i = 0; i < wordsToGuess.length; i++) {
//         var nextGuess = wordsToGuess[i]
//     }
// };

