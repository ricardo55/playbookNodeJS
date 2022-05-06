class Spiderman {

    constructor(name, age,actorInt,numPelis,estudioCine) {
        this.name = name;
        this.age = age;
        this.actorInt = actorInt;
        this.numPelis = numPelis;
        this.estudioCine = estudioCine;
    }

    getInfo() {
        return `${this.name} es un Spiderman, tiene ${this.age} años, es un actor ${this.actorInt} y ha participado en ${this.numPelis} películas.`;
    }


}

module.exports = Spiderman;