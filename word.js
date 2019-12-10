var Letter = require("./letter.js")




// charToGuess();

var Word = function (str) {

    this.toString = function (str) {
        var word = "";

        for (var i = 0; i < str.length; i++) {
            var char = new Letter(nextGuess[i])
            char.toString();
            this.word += char;
        }

        return word
    }

    this.returnGuess = function (CharGuessed) {
        for (var i = 0; i < word.length; i++) {
            this.word.length[i].checkGuess();
        }
    }


};


    // var Word = function (str) {
    //     this.letterArr = [
    //         new Letter("b"),
    //         new Letter("c"),
    //         new Letter("d"),
    //         new Letter("e"),
    //         new Letter("f"),
    //     ];

    //     this.to = function () {
    //         for (var i = 0; i < letterArr.length; i++) {
    //             var char = letterArr[i].revealChar();
    //             return console.log(char);

    //         }

    //         // this.letterArr.join("");
    //     }

    //     this.doCheckGuess = function () {

    //     };
    // }