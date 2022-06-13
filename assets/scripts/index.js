const newDice = new dice();

const buttonLeft = document.getElementById("buttonLefthPosition");
const buttonRight = document.getElementById("buttonRightPosition");

buttonLeft.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("a");
    newDice.diceShuffler();

    //  strong.innerText = newCalculator.generalConverter(input.value, select.value);
});

buttonRight.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("a");
    //  strong.innerText = newCalculator.generalConverter(input.value, select.value);
});