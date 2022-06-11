class dice {
    constructor() {
        this.numberFace = 0;
    }

    generateNumberRandom() {
        return Math.floor(Math.random() * 6) + 1;
    }
    play() {
        if (!this.itPlayed) {
            this.numberFace = this.generateNumberRandom();
            this.itPlayed = true;
            return "Não tinha jogado, mas acabei de jogar!";
        }
        return "Já Jogou!";
    }
}
class given1 extends dice {
    constructor() {
        super();
        this.numberFace = 0;
        this.itPlayed = false;
    }
}
class given2 extends dice {
    constructor() {
        super();
        this.numberFace = 0;
        this.itPlayed = false;
    }
}
class given3 extends dice {
    constructor() {
        super();
        this.numberFace = 0;
        this.itPlayed = false;
    }
}
class given4 extends dice {
    constructor() {
        super();
        this.numberFace = 0;
        this.itPlayed = false;
    }
}
class given5 extends dice {
    constructor() {
        super();
        this.numberFace = 0;
        this.itPlayed = false;
    }
}
class given6 extends dice {
    constructor() {
        super();
        this.numberFace = 0;
        this.itPlayed = false;
    }
}

const b = new given1();
console.log(given1);
given1.play();
console.log(given1);
console.log(given1.numberFace, given1.itPlayed);