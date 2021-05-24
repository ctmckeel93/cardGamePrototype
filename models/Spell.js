const { Card } = require('./Card.js')

class Spell extends Card {
    constructor(name, cost, rarity, arena=false){
        super(name, cost, rarity);
        this.target = null 
        this.isArena = arena  
    }
}

module.exports = { Spell }