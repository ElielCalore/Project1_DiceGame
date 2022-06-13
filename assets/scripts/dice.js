class dice {
    constructor() {
        (this.array = []),
        (this.imageFaceDice = [
            "./assets/images/image_given_one.jpg",
            "./assets/images/image_given_two.jpg",
            "./assets/images/image_given_three.jpg",
            "./assets/images/image_given_four.jpg",
            "./assets/images/image_given_five.jpg",
            "./assets/images/image_given_six.jpg",
        ]);
    }

    generateNumberRandom() {
        return Math.floor(Math.random() * 6);
    }

    diceShuffler() {
        let dices = document.getElementsByClassName("dice");
        let array;
        for (let i = 0; i < 6; i++) {
            let index = this.generateNumberRandom();
            dices[i].setAttribute("src", this.imageFaceDice[index]);
            this.array[i] = index;
        }

        console.log(this.vectorComparison(this.array));
    }

    calculateVectorComparison(number) {
        if (number === 1) {
            return 100;
        } else if (number === 2) {
            return 20;
        } else if (number === 3) {
            return 30;
        } else if (number === 4) {
            return 40;
        } else if (number === 5) {
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