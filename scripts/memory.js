const $ = require("../res/jquery");

const cardDeck = $("#card-deck");
let currentLevel = 0;

const newGame = $("#newGame");


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
    for(let  i = 0; i < nbrofPaires; i++) paires.push(2);
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
        let r = getRandomNumber(3);
        if(arrayOfPaires[r] !== 0) {
            switch (r) {
                case 0:
                    arrayOfCard[cardID].addClass("dog");
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
        }
    }
}

function flipCard(targetCard) {
    if(targetCard.hasClass("flipped")) {
        targetCard.attr("src", "../img/dos-carte.png")
    } else {
        if(targetCard.hasClass("dog")) targetCard.attr("src", "../img/carte-chien.png");
        else if(targetCard.hasClass("cat")) targetCard.attr("src", "../img/carte-chat.png");
        else if(targetCard.hasClass("duck")) targetCard.attr("src", "../img/carte-canard.png");
    }
}

function checkClicked(arrayOfCard) {
    let cpt = 0;
    for(let card of arrayOfCard) if(card.hasClass("clicked")) cpt += 1;
    return cpt;
}

function checkValidPair(arrayOfCard) {
    let pet = [0,0,0];
    for(let card of arrayOfCard) {
        let card1;
        if(card.hasClass("clicked") && !card.hasClass("validPair")) {
            if(card.hasClass("dog")) pet[0] += 1;
            else if(card.hasClass("cat")) pet[1] += 1;
            else if(card.hasClass("duck")) pet[2] += 1;
        }
    }
    if(pet[0] === 2) for(let card of arrayOfCard) if(card.hasClass("dog")) card.addClass("validPair");
    if(pet[1] === 2) for(let card of arrayOfCard) if(card.hasClass("cat")) card.addClass("validPair");
    if(pet[2] === 2) for(let card of arrayOfCard) if(card.hasClass("duck")) card.addClass("validPair");

}

function cleanDeck(arrayOfCard) {
    for(let card of arrayOfCard) {
        if(!card.hasClass("validPair")) {
            if(card.hasClass("flipped")) flipCard(card);
            card.removeClass("flipped");
        }
        card.removeClass("clicked");
    }
}

function isAllValide(arrayOfCard) {
    let cpt = 0;
    for(let card of arrayOfCard) if(card.hasClass("validPair")) cpt += 1;
    return cpt === 6;
}


cardDeck.on("click", (e) => {
    //if($(e.target).hasClass("dog")) console.log("DOG !!");
    let targetCard = $(e.target);
    if(!targetCard.hasClass("validPair") && checkClicked(arrayOfCard) < 2) {
        targetCard.addClass("clicked");
        flipCard(targetCard);
        targetCard.addClass("flipped");

        if(checkClicked(arrayOfCard) === 2) {
            checkValidPair(arrayOfCard);
            setTimeout(() => {cleanDeck(arrayOfCard)}, 1000);
            console.log("2 flip")
        }
    }

    if(isAllValide(arrayOfCard)) newGame.show();
});

function nextLevel() {
    for(let card of arrayOfCard) {
        card.removeClass("validPair clicked");
        flipCard(card);
        card.removeClass("flipped");
    }
    let arrayRand = generateRandomArray(3);
    giveClassRandomly(arrayRand);
    newGame.hide();
    currentLevel += 1;
}

nextLevel();
