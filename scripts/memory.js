const $ = require("../res/jquery");

const cardDeck = $("#card-deck");

const newGame = $("#newGame");
newGame.hide();

let arrayOfCard = [
    $("#card1 img"),
    $("#card2 img"),
    $("#card3 img"),
    $("#card4 img"),
    $("#card5 img"),
    $("#card6 img")
];

function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
}


// Function to generate an array with numbers from 0 to the number of pairs
function generateRandomArray(nbrofPaires) {
    let paires = [];
    for(let  i = 0; i < nbrofPaires; i++) {
        paires.push(2);
    }
    return paires;
}

function checkArray(a, b) {
    if(a.length !== b.length) return false;
    for(let i = 0; i < b.length; i++) {
        if(a[i] !== b[i]) return false;
    }
    return true;
}

function giveClassRandomly(arrayOfPaires) {
    let cardID = 0;
    while(!checkArray(arrayOfPaires, [0,0,0])) {
        console.log(cardID);
        let r = getRandomNumber(3);
        if(arrayOfPaires[r] !== 0) {
            switch (r) {
                case 0:
                    if(arrayOfPaires[r] === 1) {
                        arrayOfCard[cardID].addClass("dog");
                    } else {
                        arrayOfCard[cardID].addClass("dog");
                    }
                    break;
                case 1:
                    arrayOfCard[cardID].addClass("cat");
                    break;
                case 2:
                    arrayOfCard[cardID].addClass("duck");
                    break;
                default:
                    arrayOfCard[cardID].addClass("error");
                    break;
            }
            arrayOfPaires[r] -= 1;
            cardID += 1;
            console.log(cardID);
        }
    }
}



cardDeck.on("click", (e) => {
    if($(e.target).hasClass("dog")) console.log("DOG !!");
});

let arrayRand = generateRandomArray(3);

giveClassRandomly(arrayRand);