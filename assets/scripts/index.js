const newDice = new dice();

const buttonLeft = document.getElementById("buttonLefthPosition");
const buttonRight = document.getElementById("buttonRightPosition");

//console.log(buttonLeft);

let index = 0;
let counter = 0;

const url = "./assets/sounds/sound_dice_roll.mp3";
const url2 = "./assets/sounds/stop.mp3";
const audio = new Audio(url);
const audio2 = new Audio(url2);

let returnNewDice = {};
let returnVectorComparison = 0;

buttonLeft.addEventListener("click", (event) => {
    event.preventDefault();

    counter++;
    if (counter < 2) {
        audio.play();
        index = 0;
        returnNewDice = newDice.diceShuffler();
        returnVectorComparison = newDice.vectorComparison(returnNewDice);
        newDice.printScore(returnVectorComparison, index);
    } else if (counter == 2) {
        audio.play();
        index = 0;
        returnNewDice = newDice.diceShuffler();
        returnVectorComparison = newDice.vectorComparison(returnNewDice);
        newDice.printScore(returnVectorComparison, index);
        newDice.saveResult(returnVectorComparison, index);
        newDice.printScore(returnVectorComparison, index);
        buttonLeft.disabled = false;
    } else if (counter < 4) {
        audio.play();
        index = 1;
        returnNewDice = newDice.diceShuffler();
        returnVectorComparison = newDice.vectorComparison(returnNewDice);
        newDice.printScore(returnVectorComparison, index);
    } else if (counter == 4) {
        audio.play();
        index = 1;
        returnNewDice = newDice.diceShuffler();
        returnVectorComparison = newDice.vectorComparison(returnNewDice);
        newDice.printScore(returnVectorComparison, index);
        newDice.saveResult(returnVectorComparison, index);
        newDice.printScore(returnVectorComparison, index);
        buttonLeft.disabled = false;
    } else {
        buttonLeft.disabled = false;
        counter = 0;
    }
});

buttonRight.addEventListener("click", (event) => {
    event.preventDefault();
    if (counter % 2 === 0) {
        audio2.play();
        newDice.printScore(returnVectorComparison, index);
        counter + 2;
    } else {
        audio2.play();
        newDice.saveResult(returnVectorComparison, index);
        newDice.printScore(returnVectorComparison, index);
        counter++;
    }
});