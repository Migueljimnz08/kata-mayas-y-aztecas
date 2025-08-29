class Warrior {
    constructor(life, power){
        this.life = life || 100,
        this.power = power || 30
    }

    get attack () {return this.power}
    defend (damage) {this.life -= damage
        console.log(this.life)
    }
}
class Maya extends Warrior {
    constructor(life, power) {
        super(life, power)
    }
    drinkColaCao () {
        return this.power += 10;
    }
}
class Aztec extends Warrior {
    constructor(life, power) {
        super(life, power)
    }
    drinkNesquik () {
        return this.life += 10;
    }
}
let Azteca = new Aztec();
let Mayaa = new Maya();

Azteca.drinkNesquik();
Mayaa.drinkColaCao();

Mayaa.attack; 
Azteca.defend(Mayaa.attack);

Azteca.attack;
Mayaa.defend(Azteca.attack);