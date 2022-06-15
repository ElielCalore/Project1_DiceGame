class dice {
    constructor() {
        (this.array = []), (this.score = [0, 0]);
        this.imageFaceDice = [
            "./assets/images/image_given_one.jpg",
            "./assets/images/image_given_two.jpg",
            "./assets/images/image_given_three.jpg",
            "./assets/images/image_given_four.jpg",
            "./assets/images/image_given_five.jpg",
            "./assets/images/image_given_six.jpg",
        ];
    }

    generateNumberRandom() {
        return Math.floor(Math.random() * 6);
    }

    diceShuffler() {
        let dices = document.getElementsByClassName("dice");

        for (let i = 0; i < 6; i++) {
            let index = this.generateNumberRandom();
            dices[i].setAttribute("src", this.imageFaceDice[index]);
            if (index == 0) {
                this.array[i] = index + 1;
            } else {
                this.array[i] = index;
            }
            this.array[i] = index;
        }

        return this.array;
    }

    printScore(sum, index) {
        let score = document.getElementsByClassName("score");
        let player = document.getElementById("player");
        let playerResult = document.getElementById("playerResult");

        score[index].innerText = this.score[index];
        player.innerText = "Player: " + index.toString();
        playerResult.innerText = "Points round: " + sum.toString();
    }
    saveResult(sum, index) {
        this.score[index] = this.score[index] + sum;
        if (this.score[index] >= 1000) {
            const exchange = document.getElementsByClassName("show");
            exchange[0].setAttribute("class", "hidden");
            const message = "Player " + index + " is the Winner!!!";

            const newDiv = document.createElement("div");

            const newContent = document.createTextNode(message);

            const divCurrent = document.getElementById("newDiv");

            divCurrent.appendChild(newDiv);
            newDiv.innerText = message;

            //divCurrent.appendChild(newContent); //adiciona o nó de texto à nova div criada

            this.restart();
            //exchange.classList.add(show);
            console.log("Champions o Player: " + index);
        }
    }
    restart() {
        this.array = [];
        this.score = [0, 0];
        this.printScore(0, 0);
        this.printScore(0, 1);
    }

    calculateVectorComparison(number) {
        if (number === 0) {
            return 100;
        } else if (number === 1) {
            return 20;
        } else if (number === 2) {
            return 30;
        } else if (number === 3) {
            return 40;
        } else if (number === 4) {
            return 50;
        } else {
            return 60;
        }
    }
    vectorComparison(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += this.calculateVectorComparison(array[i]);
        }
        return sum;
    }
}