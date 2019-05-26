const $ = require("../res/jquery");

const wordDisplay = $("#word-display span");
const wordEntry = $("#word-entry span");

let myWord = [];

function getRandomLine(size) {
    return Math.floor(Math.random() * size);
}

function getWordFromFile() {
    return new Promise(function (resolve, reject) {
        $.get("../res/liste_mots.txt", function (data) {
            let wordList = data.split("\n");
            let test = getRandomLine(wordList.length);
            resolve(wordList[test].toUpperCase());
            reject("COUCOU");
        });
    });
}

function setWordEntry(word) {
    let size = word.length;
    let entry = "";
    for(let i = 1; i < size; i++) {
        entry += "_ ";
    }
    return entry;
}

let secretWord = "";
getWordFromFile().then((word) => {
    secretWord = word;
    wordDisplay.html(word);
    wordEntry.html(setWordEntry(word));
});

function buildWordtoFind(word, myWord) {
    for(let letter in word) {

    }
}

document.addEventListener("keypress", (e) => {
    console.log(e);
});