const newDice = new dice();

const buttonLeft = document.getElementById("buttonLefthPosition");
const buttonRight = document.getElementById("buttonRightPosition");
let index = 0;
let counter = 0;
buttonLeft.addEventListener("click", (event) => {
    event.preventDefault();
    counter++;
    if (counter)
        if (counter <= 2) {
            newDice.diceShuffler(index);
        } else if (counter <= 4) {
        newDice.diceShuffler(index + 1);
    } else {
        counter = 0;
    }
});

buttonRight.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("a");
});