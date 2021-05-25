const { Creature } = require('./Creature.js')
const { Player } = require('./Player.js')
const { Spell } = require('./Spell.js')
// const { Creature } = require('./Creature.js')

// console.log(classes)

class Battlefield {
    constructor(){
        this.players = []
        this.main = []
        this.arena = []
        this.spells = []
    }

    addToField(card){
        console.log("Spell is a " + typeof(Spell))
        if ( card instanceof Spell  )
        {
            console.log("This is a spell")
            if (card.isArena === true ){
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
        else if (card instanceof Mana){

        }
        else {
            console.log("Card not valid")
        }
        return this 
    }

    startGame(numPlayers,){
        for (let i = 1; i < numPlayers + 1; i++){
            this.players.push(new Player("Player " + numPlayers ));
        }
    }
}

module.exports = { Battlefield }
// console.log(battle.main)