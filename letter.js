var Letter = function (letter) {
    var letter = letter;
    var placeholder = "_";
    var guessed = false;
    var revealChar = function () {
        if (guessed) {
            return letter;
        } else {
            return placeholder;
        }
    };
    var checkGuess = function (guess) {
        if (guess === letter) {
            guessed = true;
        }
    };
};

module.exports = Letter;