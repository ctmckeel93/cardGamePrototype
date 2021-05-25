const { Card, Player, Battlefield} = require('./index.js')

class Mana extends Card {
    constructor(name, isColorless=false, isPlains=false, isSwamp=false, isMountain=false, isForest=false, isIsland=false, value=1, rarity="common"){
        super(name,rarity);
        this.isColorless=isColorless
        this.isPlains=isPlains 
        this.isSwamp=isSwamp
        this.isMountain=isMountain 
        this.isForest=isForest 
        this.isIsland=isIsland

        /* Value is an object containing all colors with their respective values:
        {
            colorless:
            white:
            black:
            red:
            green:
            blue:
        }
        */
        this.value=value
        this.rarity = rarity
        this.cost=0
    }

    
}

player1 = new Player("Me")
plains = new Mana("Plains", true)
console.log(plains)


module.exports = { Mana }
