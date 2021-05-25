const { Card } = require('./Card.js')

class Creature extends Card {
    constructor(name, cost, rarity, pow, tough, clan, aff){
        super(name, cost, rarity);
        this.power = pow;
        this.toughness = tough;
        this.clan = clan;
        this.affinity = aff;
        this.isAlive = true;
    }

    attack(target){
        if (target instanceof Creature){
            this.toughness - target.power 
            target.toughness - this.power 
            if (this.toughness <= 0) {
                this.isAlive = false;
                console.log(this.name + " is dead");
            }
            if (target.toughness <= 0){
                target.isAlive = false 
                console.log(target.name + " is dead")
            }
        }
        return this 
    }
}

creature = new Creature("Blue-Eyes", 5, "rare", 5, 10, "Dragon", "Light"  )
console.log(creature)
module.exports = { Creature }

