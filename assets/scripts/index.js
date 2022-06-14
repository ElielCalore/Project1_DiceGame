const newDice = new dice();

const buttonLeft = document.getElementById("buttonLefthPosition");
const buttonRight = document.getElementById("buttonRightPosition");
let index = 0;
let counter = 0;

const url = "./assets/sounds/sound_dice_roll.mp3";
const audio = new Audio(url);

buttonLeft.addEventListener("click", (event) => {
    event.preventDefault();
    audio.play();
    counter++;
    if (counter < 2) {
        const returnNewDice = newDice.diceShuffler(index);
        console.log(
            "returnNewDice:" + returnNewDice + " typeof: " + typeof returnNewDice
        );
        const returnVectorComparison = newDice.vectorComparison(returnNewDice);
        console.log(
            "returnVectorComparison:" +
            returnVectorComparison +
            " typeof: " +
            typeof returnVectorComparison
        );
        newDice.printScore(returnVectorComparison, index);
        audio.play();
    } else if (counter == 2) {
        const returnNewDice = newDice.diceShuffler(index);
        const returnVectorComparison = newDice.vectorComparison(returnNewDice);
        newDice.printScore(returnVectorComparison, index);
        newDice.saveResult(returnVectorComparison, index);
        audio.play();
        buttonLeft.disabled = false;
    } else if (counter < 4) {
        const returnNewDice = newDice.diceShuffler(index + 1);
        const returnVectorComparison = newDice.vectorComparison(returnNewDice);
        newDice.printScore(returnVectorComparison, index + 1);
        audio.play();

        //buttonLeft.disabled = false;
    } else if (counter == 4) {
        // buttonLeft.disabled = true;
        const returnNewDice = newDice.diceShuffler(index + 1);
        const returnVectorComparison = newDice.vectorComparison(returnNewDice);
        newDice.printScore(returnVectorComparison, index + 1);
        newDice.saveResult(returnVectorComparison, index + 1);
        audio.play();
        buttonLeft.disabled = false;
    } else {
        buttonLeft.disabled = false;
        counter = 0;
    }
});

buttonRight.addEventListener("click", (event) => {
    event.preventDefault();

    console.log("a");
});