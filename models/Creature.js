const { Card } = require('./Card.js')

class Creature extends Card {
    constructor(name, cost, rarity, atk, def){
        super(name, cost, rarity );
        this.attack = atk 
        this.defense = def   
    }
}

module.exports = {Creature}

