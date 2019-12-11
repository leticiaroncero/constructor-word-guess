var Letter = require("./letter.js")

var Word = function (str) {
    this.word = [];

    for (var i = 0; i < str.length; i++) {
        var char = new Letter(str[i]);
        this.word.push(char);
    }

    this.toString = function () {
        var result = "";
        for (var i = 0; i < this.word.length; i++) {
            var char = this.word[i].toString();
            result += char + " ";
        }
        return result;
    }

    this.checkChar = function (guess) {
        var correctGuess = false;
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i].checkGuess(guess.toLowerCase())) {
                correctGuess = true;
            }
        }
        return correctGuess;
    }

};

module.exports = Word;