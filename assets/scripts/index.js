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
    if (counter) audio.play();
    if (counter <= 2) {
        newDice.diceShuffler(index);
        audio.play();
    } else if (counter <= 4) {
        buttonLeft.disabled = true;
        newDice.diceShuffler(index + 1);
        buttonLeft.disabled = false;
    } else {
        counter = 0;
        audio.play();
    }
});

buttonRight.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("a");
});