const $ = require("../res/jquery");

const wordDisplay = $("#word-display span");
const wordEntry = $("#word-entry span");
const reloadButton = $("#divButton");

let currentLetterIndex = 0;

let myWord = [];
let secretWord = "";
let currentEntry = "";

let letters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,é,è,à,ù,ç".toUpperCase();
letters = letters.split(',');

let specialChars = "é, è, à, ù, ç";

function getRandomLine(size) {
    return Math.floor(Math.random() * size);
}

function getWordFromFile() {
    return new Promise(function (resolve, reject) {
        $.get("../res/liste_mots.txt", function (data) {
            let wordList = data.split("\n");
            let test = getRandomLine(wordList.length);

						// Prevent from getting special characters
						while (wordList[test].indexOf("�") !== -1) {
							test = getRandomLine(wordList.length);
						}

            resolve(wordList[test].toUpperCase());
            reject("COUCOU");
        });
    });
}

function setWordEntry(word) {
    let size = word.length;
    let entry = "";
    for(let i = 0; i < size; i++) {
      	entry += "_ ";
    }
    return entry;
}


function buildWordtoFind(word, myWord) {
    for(let letter in word) {

    }
}


function updateEntry(key) {
		let entry = [];
		let i = 0;
		for (i = 0; i < currentLetterIndex; i++) {
				entry.push(secretWord[i]);
		}
		entry.push(key.toUpperCase());
		i++;
		for (i; i < secretWord.length; i++) {
			entry.push("_ ");
		}

		currentLetterIndex++;

		return entry.join("");
}


function updateEntryWithError(key) {
	let entry = [];
	let i = 0;
	for (i = 0; i < currentLetterIndex; i++) {
		entry.push(secretWord[i]);
	}
	entry.push(`<span style="color: red">${key.toUpperCase()}</span> `);
	i++;
	for (i; i < secretWord.length; i++) {
		entry.push("_ ");
	}

	return entry.join("");
}



document.addEventListener("keypress", (e) => {
		if (currentLetterIndex < secretWord.length) {
				if (e.key.toUpperCase() === secretWord[currentLetterIndex]) {
						currentEntry = updateEntry(e.key);
				} else if (letters.indexOf(e.key.toUpperCase()) !== -1) {
						currentEntry = updateEntryWithError(e.key);
				}
		}

		wordEntry.html(currentEntry);

		if (currentEntry === secretWord) {
			reloadButton.show();
		}
});



getWordFromFile().then((word) => {
    secretWord = word;
		currentEntry = setWordEntry(word);

    wordDisplay.html(word);
    wordEntry.html(currentEntry);
});


reloadButton.hide();
