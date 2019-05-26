const $ = require("../res/jquery");

const calculus = $("#calculus");
const numberChoice = $("#number-choice");

let currentLevel = 0;

let maxNumber = 50; // for now 50 is the max may change with level design

function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
}

const newGame = $("#newGame");

function isGood(a, b) {
    if (a === b) {
        newGame.show();
        calculus.html(calculus.html().replace(" ?", b));
    } else {
			M.toast({html: "Mauvaise réponse... Essayez encore"});
		}
}

function getCalculus () {
    let a = getRandomNumber(maxNumber);
    let b = getRandomNumber(maxNumber);
    let res = a + b;
    return [a,b,res];
}


function nextLevel() {
		currentLevel++;

		M.Toast.dismissAll();

		console.log(`Current level: ${currentLevel}`);

		newGame.hide();

		numberChoice.html("");  // Clear previous answers

		let [a,b,res] = getCalculus();

		calculus.html("<span>" + a.toString() + " + " + b.toString() + " =  ?</span>");

		let placeRes = getRandomNumber(3);
		for (let i=0; i < 3; i++) {
				if (i === placeRes) {
						let num = res;
						numberChoice.append("<span class='col s4' id='rans'>" + res + "</span>");

						document.querySelector("#rans").addEventListener("click", function(e) {
								e.stopPropagation();
								isGood(num, res);
						});
				} else {
						let num = getRandomNumber(90);
						numberChoice.append(`<span class='col s4 wans${i}'> ${num} </span>`);

						document.querySelector(`#number-choice span.wans${i}`).addEventListener("click", function(e) {
								e.stopPropagation();
								isGood(num, res);
						})
				}
		}
}

nextLevel();
