const newDice = new dice();

const buttonLeft = document.getElementById("buttonLefthPosition");
const buttonRight = document.getElementById("buttonRightPosition");
let index = 0;
let counter = 0;

const url = "./assets/sounds/sound_dice_roll.mp3";
const audio = new Audio(url);

let returnNewDice = {};
let returnVectorComparison = 0;

buttonLeft.addEventListener("click", (event) => {
    event.preventDefault();
    buttonRight.setAttribute("disabled", false);
    counter++;
    if (counter < 2) {
        index = 0;
        returnNewDice = newDice.diceShuffler();
        returnVectorComparison = newDice.vectorComparison(returnNewDice);
        newDice.printScore(returnVectorComparison, index);
        audio.play();
    } else if (counter == 2) {
        index = 0;
        returnNewDice = newDice.diceShuffler();
        returnVectorComparison = newDice.vectorComparison(returnNewDice);
        newDice.printScore(returnVectorComparison, index);
        newDice.saveResult(returnVectorComparison, index);
        newDice.printScore(returnVectorComparison, index);
        audio.play();
        buttonLeft.disabled = false;
    } else if (counter < 4) {
        index = 1;
        returnNewDice = newDice.diceShuffler();
        returnVectorComparison = newDice.vectorComparison(returnNewDice);
        newDice.printScore(returnVectorComparison, index);
        audio.play();
    } else if (counter == 4) {
        index = 1;
        returnNewDice = newDice.diceShuffler();
        returnVectorComparison = newDice.vectorComparison(returnNewDice);
        newDice.printScore(returnVectorComparison, index);
        newDice.saveResult(returnVectorComparison, index);
        audio.play();
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
        //newDice.saveResult(returnVectorComparison, index);
        newDice.printScore(returnVectorComparison, index);
        counter + 2;
        buttonRight.setAttribute("disabled", false);
    } else {
        newDice.saveResult(returnVectorComparison, index);
        newDice.printScore(returnVectorComparison, index);
        counter++;
        buttonRight.setAttribute("disabled", false);
    }
});