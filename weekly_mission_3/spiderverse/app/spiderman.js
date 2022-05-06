class Spiderman {

    constructor(name, age,actorInt,numPelis,estudioCine) {
        this.name = name;
        this.age = age;
        this.actorInt = actorInt;
        this.numPelis = numPelis;
        this.estudioCine = estudioCine;
    }

    getInfo() {
        return `${this.name} es un Spiderman, tiene ${this.age} años, es un actor en ${this.actorInt} y ha participado en ${this.numPelis} películas en el estudio ${this.estudioCine}.`;
    }


}

module.exports = Spiderman;