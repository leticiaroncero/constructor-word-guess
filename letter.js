var Letter = function (letter) {
    this.letter = letter;
    this.placeholder = "_";
    this.guessed = false;

    this.revealChar = function () {
        if (this.guessed) {
            return this.letter;
        } else {
            return this.placeholder;
        }
    };

    this.checkGuess = function (guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    };
};

module.exports = Letter;