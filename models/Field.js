const { Creature } = require('./Creature.js')
const { Spell } = require('./Spell.js')
// const { Creature } = require('./Creature.js')

// console.log(classes)

class Battlefield {
    constructor(){
        this.main = []
        this.arena = []
        this.spells = []
    }

    addToField(card){
        console.log(card)
        const mainCap = 5 
        const spellCap = 5
        const arenaCap = 2
        console.log("Spell is a " + typeof(Spell))
        if ( card instanceof Spell  )
        {
            console.log("This is a spell")
            if (card.isArena === true && this.arena.length < arenaCap){
                this.arena.push(card)
            }
            if (this.spells.length < spellCap)
            {
                this.spells.push(card)
            }
            else {
                console.log("No spell slots available")
            }
            
        }
        else if ( card instanceof Creature ) {
            console.log("This is a creature")
            if (this.main.length < mainCap){

                this.main.push(card)
            }
            else {
                console.log("No main slots available")
            }
        }
        else {
            console.log("Card not valid")
        }

    }
}

module.exports = { Battlefield }
// console.log(battle.main)